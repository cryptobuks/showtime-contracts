/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ShowtimeV1MarketInterface extends utils.Interface {
  contractName: "ShowtimeV1Market";
  functions: {
    "acceptedCurrencies(address)": FunctionFragment;
    "availableForSale(uint256)": FunctionFragment;
    "buy(uint256,uint256,uint256,uint256,address,address)": FunctionFragment;
    "cancelSale(uint256)": FunctionFragment;
    "createSale(uint256,uint256,uint256,address)": FunctionFragment;
    "isTrustedForwarder(address)": FunctionFragment;
    "listings(uint256)": FunctionFragment;
    "maxRoyaltiesBasisPoints()": FunctionFragment;
    "nft()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "royaltiesEnabled()": FunctionFragment;
    "setAcceptedCurrency(address,bool)": FunctionFragment;
    "setMaxRoyalties(uint256)": FunctionFragment;
    "setRoyaltiesEnabled(bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "trustedForwarder()": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptedCurrencies",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "availableForSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createSale",
    values: [BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "listings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxRoyaltiesBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "royaltiesEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAcceptedCurrency",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxRoyalties",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyaltiesEnabled",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedForwarder",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptedCurrencies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "availableForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelSale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxRoyaltiesBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltiesEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAcceptedCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxRoyalties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoyaltiesEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "AcceptedCurrencyChanged(address,address,bool)": EventFragment;
    "ListingCreated(uint256,address,uint256)": EventFragment;
    "ListingDeleted(uint256,address)": EventFragment;
    "MaxRoyaltiesUpdated(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "RoyaltiesEnabledChanged(address,bool)": EventFragment;
    "RoyaltyPaid(address,address,uint256)": EventFragment;
    "SaleCompleted(uint256,address,address,address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AcceptedCurrencyChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListingCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListingDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MaxRoyaltiesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltiesEnabledChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltyPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type AcceptedCurrencyChangedEvent = TypedEvent<
  [string, string, boolean],
  { account: string; currency: string; accepted: boolean }
>;

export type AcceptedCurrencyChangedEventFilter =
  TypedEventFilter<AcceptedCurrencyChangedEvent>;

export type ListingCreatedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { listingId: BigNumber; seller: string; tokenId: BigNumber }
>;

export type ListingCreatedEventFilter = TypedEventFilter<ListingCreatedEvent>;

export type ListingDeletedEvent = TypedEvent<
  [BigNumber, string],
  { listingId: BigNumber; seller: string }
>;

export type ListingDeletedEventFilter = TypedEventFilter<ListingDeletedEvent>;

export type MaxRoyaltiesUpdatedEvent = TypedEvent<
  [string, BigNumber],
  { account: string; maxRoyaltiesBasisPoints: BigNumber }
>;

export type MaxRoyaltiesUpdatedEventFilter =
  TypedEventFilter<MaxRoyaltiesUpdatedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type RoyaltiesEnabledChangedEvent = TypedEvent<
  [string, boolean],
  { account: string; royaltiesEnabled: boolean }
>;

export type RoyaltiesEnabledChangedEventFilter =
  TypedEventFilter<RoyaltiesEnabledChangedEvent>;

export type RoyaltyPaidEvent = TypedEvent<
  [string, string, BigNumber],
  { receiver: string; currency: string; amount: BigNumber }
>;

export type RoyaltyPaidEventFilter = TypedEventFilter<RoyaltyPaidEvent>;

export type SaleCompletedEvent = TypedEvent<
  [BigNumber, string, string, string, BigNumber],
  {
    listingId: BigNumber;
    seller: string;
    buyer: string;
    receiver: string;
    quantity: BigNumber;
  }
>;

export type SaleCompletedEventFilter = TypedEventFilter<SaleCompletedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface ShowtimeV1Market extends BaseContract {
  contractName: "ShowtimeV1Market";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ShowtimeV1MarketInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptedCurrencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    availableForSale(
      _listingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    buy(
      _listingId: BigNumberish,
      _tokenId: BigNumberish,
      _quantity: BigNumberish,
      _price: BigNumberish,
      _currency: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelSale(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createSale(
      _tokenId: BigNumberish,
      _quantity: BigNumberish,
      _price: BigNumberish,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string] & {
        tokenId: BigNumber;
        quantity: BigNumber;
        price: BigNumber;
        currency: string;
        seller: string;
      }
    >;

    maxRoyaltiesBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    royaltiesEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    setAcceptedCurrency(
      currency: string,
      accepted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxRoyalties(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRoyaltiesEnabled(
      newValue: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    trustedForwarder(overrides?: CallOverrides): Promise<[string]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptedCurrencies(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  availableForSale(
    _listingId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  buy(
    _listingId: BigNumberish,
    _tokenId: BigNumberish,
    _quantity: BigNumberish,
    _price: BigNumberish,
    _currency: string,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelSale(
    _listingId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createSale(
    _tokenId: BigNumberish,
    _quantity: BigNumberish,
    _price: BigNumberish,
    _currency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isTrustedForwarder(
    forwarder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  listings(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, string] & {
      tokenId: BigNumber;
      quantity: BigNumber;
      price: BigNumber;
      currency: string;
      seller: string;
    }
  >;

  maxRoyaltiesBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

  nft(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  royaltiesEnabled(overrides?: CallOverrides): Promise<boolean>;

  setAcceptedCurrency(
    currency: string,
    accepted: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxRoyalties(
    newValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRoyaltiesEnabled(
    newValue: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  trustedForwarder(overrides?: CallOverrides): Promise<string>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptedCurrencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    availableForSale(
      _listingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy(
      _listingId: BigNumberish,
      _tokenId: BigNumberish,
      _quantity: BigNumberish,
      _price: BigNumberish,
      _currency: string,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelSale(
      _listingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createSale(
      _tokenId: BigNumberish,
      _quantity: BigNumberish,
      _price: BigNumberish,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string] & {
        tokenId: BigNumber;
        quantity: BigNumber;
        price: BigNumber;
        currency: string;
        seller: string;
      }
    >;

    maxRoyaltiesBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    royaltiesEnabled(overrides?: CallOverrides): Promise<boolean>;

    setAcceptedCurrency(
      currency: string,
      accepted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxRoyalties(
      newValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoyaltiesEnabled(
      newValue: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    trustedForwarder(overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AcceptedCurrencyChanged(address,address,bool)"(
      account?: string | null,
      currency?: null,
      accepted?: null
    ): AcceptedCurrencyChangedEventFilter;
    AcceptedCurrencyChanged(
      account?: string | null,
      currency?: null,
      accepted?: null
    ): AcceptedCurrencyChangedEventFilter;

    "ListingCreated(uint256,address,uint256)"(
      listingId?: BigNumberish | null,
      seller?: string | null,
      tokenId?: BigNumberish | null
    ): ListingCreatedEventFilter;
    ListingCreated(
      listingId?: BigNumberish | null,
      seller?: string | null,
      tokenId?: BigNumberish | null
    ): ListingCreatedEventFilter;

    "ListingDeleted(uint256,address)"(
      listingId?: BigNumberish | null,
      seller?: string | null
    ): ListingDeletedEventFilter;
    ListingDeleted(
      listingId?: BigNumberish | null,
      seller?: string | null
    ): ListingDeletedEventFilter;

    "MaxRoyaltiesUpdated(address,uint256)"(
      account?: string | null,
      maxRoyaltiesBasisPoints?: null
    ): MaxRoyaltiesUpdatedEventFilter;
    MaxRoyaltiesUpdated(
      account?: string | null,
      maxRoyaltiesBasisPoints?: null
    ): MaxRoyaltiesUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "RoyaltiesEnabledChanged(address,bool)"(
      account?: string | null,
      royaltiesEnabled?: null
    ): RoyaltiesEnabledChangedEventFilter;
    RoyaltiesEnabledChanged(
      account?: string | null,
      royaltiesEnabled?: null
    ): RoyaltiesEnabledChangedEventFilter;

    "RoyaltyPaid(address,address,uint256)"(
      receiver?: string | null,
      currency?: null,
      amount?: null
    ): RoyaltyPaidEventFilter;
    RoyaltyPaid(
      receiver?: string | null,
      currency?: null,
      amount?: null
    ): RoyaltyPaidEventFilter;

    "SaleCompleted(uint256,address,address,address,uint256)"(
      listingId?: BigNumberish | null,
      seller?: string | null,
      buyer?: string | null,
      receiver?: null,
      quantity?: null
    ): SaleCompletedEventFilter;
    SaleCompleted(
      listingId?: BigNumberish | null,
      seller?: string | null,
      buyer?: string | null,
      receiver?: null,
      quantity?: null
    ): SaleCompletedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    acceptedCurrencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    availableForSale(
      _listingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy(
      _listingId: BigNumberish,
      _tokenId: BigNumberish,
      _quantity: BigNumberish,
      _price: BigNumberish,
      _currency: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelSale(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createSale(
      _tokenId: BigNumberish,
      _quantity: BigNumberish,
      _price: BigNumberish,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listings(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    maxRoyaltiesBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    royaltiesEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    setAcceptedCurrency(
      currency: string,
      accepted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxRoyalties(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRoyaltiesEnabled(
      newValue: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    trustedForwarder(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptedCurrencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    availableForSale(
      _listingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buy(
      _listingId: BigNumberish,
      _tokenId: BigNumberish,
      _quantity: BigNumberish,
      _price: BigNumberish,
      _currency: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelSale(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createSale(
      _tokenId: BigNumberish,
      _quantity: BigNumberish,
      _price: BigNumberish,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxRoyaltiesBasisPoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    royaltiesEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAcceptedCurrency(
      currency: string,
      accepted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxRoyalties(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRoyaltiesEnabled(
      newValue: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    trustedForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
