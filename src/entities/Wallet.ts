import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, Unique } from "typeorm";
import Client from "./Client";
import Transactions from "./Transactions";

/**
 * WALLET ENTITY
 * 
 * _id: Wallet indentifier (same _id as Client);
 * balance: Wallet total amount (in cents);
 * transaction: Wallet transactions
 * 
 */

@Entity('wallet')
@Unique(['_id'])
export default class Wallet {
  @PrimaryColumn('uuid')
  _id: string;

  @Column()
  balance: number;

  @OneToOne(() => Client, client => client.wallet)
  @JoinColumn({name: '_id'})
  client: Client

  @OneToMany(() => Transactions, (transactions) => transactions.wallet)
  transaction: Transactions[];
}