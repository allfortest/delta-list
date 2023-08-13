export  interface Project {
  id?:string,
  pool_type?:'public'|'private'
  contract_address?:string
  title?:string
  summary?:string
  social_accounts?:{
    type:string
    address:string
  }[],
  chain_info?:{
  id:string|number
  name:string
  },
  nft_name?:string
  cost_token?:{
    name:string
    symbol:string
  },
  target_token?:{
    name:string,
    symbol:string
  },
  unlock_method?:{
    method:string
    desc:string
  },
  start_time?:string
  end_time?:string
}