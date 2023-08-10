import dayjs from 'dayjs';
import projects from './main.json';
import fs from 'fs';

export interface Project {
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

// is projects a array of Project

if(!Array.isArray(projects)){
  throw new Error('projects is not a array')
}

const projectIDs:string[] = [];

const projectContractAddress:string[] = [];

(projects as Project[]).forEach((project,index)=>{
  if(!project.id){
    throw new Error(`index ${index}'s project.id is required`)
  }
  
  if(projectIDs.includes(project.id)){
    throw new Error(`index ${index}'s project.id ${project.id} is duplicated`)
  }

  projectIDs.push(project.id)

  if(!project.pool_type){
    throw new Error(`index ${index}'s project.pool_type is required`)
  }

  if(project.pool_type!=='public' && project.pool_type!=='private'){
    throw new Error(`index ${index}'s project.pool_type is invalid, it should be public or private`)
  }

  if(!project.contract_address){
    throw new Error(`index ${index}'s project.contract_address is required`)
  }

  if(projectContractAddress.includes(project.contract_address)){
    throw new Error(`index ${index}'s project.contract_address is duplicated`)
  }

  projectContractAddress.push(project.contract_address)

  if(!project.title){
    throw new Error(`index ${index}'s project.title is required`)
  }

  if(!project.summary){
    throw new Error(`index ${index}'s project.summary is required`)
  }

  if(!project.social_accounts || !Array.isArray(project.social_accounts)){
    throw new Error(`index ${index}'s project.social_accounts is required and must be a Array`)
  }

  for(let s=0;s<project.social_accounts.length;s++){
    const account = project.social_accounts[s];
    if(!account.type || !['twitter','telegram','discord','website'].includes(account.type)){
      throw new Error(`index ${index}'s project.social_accounts' type is required and must be twitter or telegram or discord or website`)
    }
    if(!account.address){
      throw new Error(`index ${index}'s project.social_accounts' address is required`)
    }
  }
  
  if(!project.chain_info){
    throw new Error(`index ${index}'s project.chain_info is required`)
  }
  
  if(!project.chain_info.id){
    throw new Error(`index ${index}'s project.chain_info.id is required`)
  }
  
  if(!project.chain_info.name){
    throw new Error(`index ${index}'s project.chain_info.name is required`)
  }


  if(!project.nft_name){
    throw new Error(`index ${index}'s project.nft_name is required`)
  }

  if(!project.cost_token){
    throw new Error(`index ${index}'s project.cost_token is required`)
  }

  if(!project.cost_token.name){
    throw new Error(`index ${index}'s project.cost_token.name is required`)
  }
  
  if(!project.cost_token.symbol){
    throw new Error(`index ${index}'s project.cost_token.symbol is required`)
  }

  if(!project.target_token){
    throw new Error(`index ${index}'s project.target_token is required`)
  }

  if(!project.target_token.name){
    throw new Error(`index ${index}'s project.target_token.name is required`)
  }
  
  if(!project.target_token.symbol){
    throw new Error(`index ${index}'s project.target_token.symbol is required`)
  }

  if(!project.unlock_method){
    throw new Error(`index ${index}'s project.unlock_method is required`)
  }
  if(!project.unlock_method.method){
    throw new Error(`index ${index}'s project.unlock_method.method is required`)
  }
  if(!project.unlock_method.desc){
    throw new Error(`index ${index}'s project.unlock_method.desc is required`)
  }


  if(!project.start_time || !dayjs(project.start_time,'YYYY-MM-DDThh:mm:ssZ',true).isValid()){
    throw new Error(`index ${index}'s project.start_time is required and must be YYYY-MM-DDThh:mm:ssTZD`)
  }

  if(!project.end_time || !dayjs(project.end_time,'YYYY-MM-DDThh:mm:ssZ',true).isValid()){
    throw new Error(`index ${index}'s project.end_time is required and must be YYYY-MM-DDThh:mm:ssTZD`)
  }
})

const needFiles = ['description.md','detail-cover.png','list-cover.png','logo.png','nft.png','outstanding.md','products.md','profit-model.md','roadmap.md','team.md']

for (let i =0; i<projectIDs.length;i++){
  const id = projectIDs[i];

  const files =  fs.readdirSync(`./projects/${id}`)

  needFiles.forEach(nf=>{
    if(!files.includes(nf)){
      throw new Error(`project ${id}'s folder is missing ${nf}`)
    }
  })

}

