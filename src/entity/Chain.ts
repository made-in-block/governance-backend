import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Proposal } from './Proposal';

@Entity()
export class Chain {
  @PrimaryColumn({ comment: 'Chain Name' })
  name: string;

  @Column({ comment: 'Chain id' })
  id: string;

  @Column({ comment: 'Bech32 Prefix' })
  prefix: string;

  @Column({ comment: 'Address allowed to vote' })
  voter_address: string;

  @Column({ comment: 'Gas price to use in transactions' })
  gas_prices: string;

  @Column({ type: 'json', comment: 'RPCs' })
  rpcs: JSON;

  @Column({ type: 'json', comment: 'LCDs' })
  lcds: JSON;

  @Column({ comment: 'SDK Version' })
  sdk_version: string;

  @Column({ comment: 'Explorer URL', default: '' })
  explorer_url: string;

  @OneToMany(() => Proposal, (proposal) => proposal.chain_name_ex)
  @JoinColumn([{ name: 'name', referencedColumnName: 'chain_name_ex' }])
  proposals: Proposal[];
}
