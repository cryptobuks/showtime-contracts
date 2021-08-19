// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import { Pausable } from "@openzeppelin/contracts/utils/Pausable.sol";
import { IERC1155 } from "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ERC1155Receiver } from "@openzeppelin/contracts/token/ERC1155/ERC1155Receiver.sol";
import { Address } from "@openzeppelin/contracts/utils/Address.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { SafeMath } from "@openzeppelin/contracts/math/SafeMath.sol";
import { IERC2981 } from "./IERC2981.sol";

contract ERC1155Sale is Ownable, Pausable, ERC1155Receiver {
    using SafeMath for uint256;
    using Address for address;

    IERC1155 public nft;
    IERC20 public quoteToken;

    // @yash: should we have a minimum selling price?
    // uint public constant MINIMUM_SELL_PRICE = 1e15;

    struct Sale {
        uint256 tokenId;
        uint256 amount;
        uint256 price;
        address seller;
        bool isActive;
    }

    enum Royalty {
        OFF,
        ON
    } // making it support non ERC2981 compliant NFTs also
    Royalty royalty;

    Sale[] public sales;

    modifier onlySeller(uint256 _saleId) {
        require(sales[_saleId].seller == msg.sender, "caller not seller");
        _;
    }

    modifier isActive(uint256 _saleId) {
        require(sales[_saleId].isActive, "sale already cancelled or bought");
        _;
    }

    modifier saleExists(uint256 _saleId) {
        require(sales.length > _saleId, "sale doesn't exist");
        _;
    }

    event New(uint256 indexed saleId, address indexed seller, uint256 indexed tokenId);
    event Cancel(uint256 indexed saleId, address indexed seller);
    event Buy(uint256 indexed saleId, address indexed seller, address indexed buyer);

    constructor(address _nft, address _quoteToken) public {
        require(_nft.isContract() && _quoteToken.isContract(), "must be contract address");

        nft = IERC1155(_nft);
        quoteToken = IERC20(_quoteToken);

        // is royalty standard compliant?
        try nft.supportsInterface(0x2a55205a) returns (bool implementsERC2981) {
            if (implementsERC2981) {
                royalty = Royalty.ON;
            }
        } catch (bytes memory) {}
    }

    /// @notice `setApprovalForAll` before calling
    function createSale(
        uint256 _tokenId,
        uint256 _amount,
        uint256 _price
    ) external whenNotPaused {
        nft.safeTransferFrom(msg.sender, address(this), _tokenId, _amount, "");
        Sale memory sale = Sale({
            tokenId: _tokenId,
            amount: _amount,
            price: _price,
            seller: msg.sender,
            isActive: true
        });
        uint256 saleId = sales.length;
        sales.push(sale);

        emit New(saleId, msg.sender, _tokenId);
    }

    function cancelSale(uint256 _saleId) external saleExists(_saleId) onlySeller(_saleId) isActive(_saleId) {
        Sale memory sale = sales[_saleId];
        // make sale invalid, and send seller his nft back
        sales[_saleId].isActive = false;
        nft.safeTransferFrom(address(this), sale.seller, sale.tokenId, sale.amount, "");

        emit Cancel(_saleId, msg.sender);
    }

    /// @notice approve for `transferFrom` before buying
    function buy(uint256 _saleId) external saleExists(_saleId) isActive(_saleId) whenNotPaused {
        Sale memory sale = sales[_saleId];

        uint256 amount = sale.price;
        if (royalty == Royalty.ON) {
            (address receiver, uint256 royaltyAmount) = _royaltyInfo(sale.tokenId, amount);
            quoteToken.transfer(receiver, royaltyAmount);
            amount = amount.sub(royaltyAmount);
        }

        sales[_saleId].isActive = false;
        quoteToken.transferFrom(msg.sender, sale.seller, amount);
        nft.safeTransferFrom(address(this), msg.sender, sale.tokenId, sale.amount, "");

        emit Buy(_saleId, sale.seller, msg.sender);
    }

    //
    // PRIVATE FUNCTIONS
    //
    function _royaltyInfo(uint256 _tokenId, uint256 _salePrice)
        private
        view
        returns (address receiver, uint256 royaltyAmount)
    {
        (receiver, royaltyAmount) = IERC2981(address(nft)).royaltyInfo(_tokenId, _salePrice);
    }

    //
    // IMPLEMENT PAUSABLE FUNCTIONS
    //
    function pause() external whenNotPaused onlyOwner {
        _pause();
    }

    function unpause() external whenPaused onlyOwner {
        _unpause();
    }

    //
    // IMPLEMENT ERC1155 RECEIVER
    //
    /* solhint-disable no-unused-vars */
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }
    /* solhint-disable no-unused-vars */
}
