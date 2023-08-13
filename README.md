# Delta project list

The Delta project list is a list of projects managed by the maintainers of this repo that have been deployed on Delta.

## Review process and merge criteria

### Process overview

1. Follow the instructions below to create a PR that would [add your project the list](#adding-a-project-to-the-list).
3. After the automated checks pass and a reviewer approves the PR, then it will automatically be merged.


## Adding a project to the list

### Add project information

Add project information with the following format in [/main.json](https://github.com/dego-launchpad/delta-list/blob/master/main.json).

**Note:** You just need add your project at the end of the array, Do not modify any existing items, otherwise it will fail the verification.

```json
{
  "id":"_demo",
  "pool_type":"public",
  "contract_address":"0xf85b26ed80b71201ada72bd39332268f46243705",
  "title":"Test Demo",
  "summary":"some summary",
  "social_accounts":[
    {
      "type":"twitter",
      "address":"https://twitter.com/"
    },
    {
      "type":"discord",
      "address":"https://discord.com/"
    },
    {
      "type":"website",
      "address":"https://www.google.com/"
    }
  ],
  "chain_info":{
    "id":97,
    "name":"BSCTest"
  },
  "nft_name":"Test Demo NFT",
  "cost_token":{
    "name":"USDT",
    "symbol":"USDT"
  },
  "target_token":{
    "name":"TargetToken",
    "symbol":"TT"
  },
  "unlock_method":{
    "method":"Linear Unlock",
    "desc":"desc..."
  },
  "start_time":"2023-08-02T02:00:00+08:00",
  "end_time":"2023-08-06T20:00:00+08:00"
}
```

```typescript
/**
 * project information need add in /main.json
 */
interface Project {
  /**
   * uniquely identifies, can use project name without space
   * This field will be used as the project route, and the resource storage directory name such as pictures|documents
   */
  id: string

  /**
   * project contract address
   */
  contract_address: string

  /**
   * public | private
   */
  pool_type: 'public' | 'private'

  /**
   * project name
   */
  title: string


  /**
   * project description
   */
  summary: string

  nft_name: string
  
  chain_info: {
    id: number
    name: string
  }

  unlock_method: {
    //Linear Unlock | OneTime Unlock | Phased Unlock
    method: string
    desc: string
  }

  const_token: {
    name: string
    symbol: string
  }

  target_token: {
    name: string
    symbol: string
  }

  /**
   * 'twitter' | 'telegram' | 'discord' | 'website'
   */
  social_accounts: {
    type: 'twitter' | 'telegram' | 'discord' | 'website'
    address: string
  }[]

  /**
   * project start time (time to enter project preparation phase)
   * Notice: please use the UTC time format YYYY-MM-DDThh:mm:ssZ
   */
  start_time: string

  /**
   * project end time (when the project was fully completed)
   * Notice: please use the UTC time format YYYY-MM-DDThh:mm:ssZ
   */
  end_time:string
}

```


### Create a folder for you project

Create a folder inside of the [projects](https://github.com/dego-launchpad/delta-list/tree/master/projects) with the same name of project_id which you set in your project information.

**Note:** The project_id must be a string without spaces.

### Add a logo to your folder

Add a logo to the data folder you just created. Your logo MUST be a PNG called `logo.png`. The aspect ratio of the logo needs to be 1:1.


### Add a list cover image to your folder

Add a list cover image to the data folder you just created. Your list-cover MUST be a PNG called `list-cover.png`. The aspect ratio of the list-cover needs to be 5:2.


### Add a detail cover image to your folder

Add a detail cover image to the data folder you just created. Your detail-cover MUST be a PNG called `detail-cover.png`. The aspect ratio of the detail-cover needs to be 5:1.


### Add a nft image to your folder

Add a nft image to the data folder you just created. Your nft MUST be a PNG called `nft.png`. The aspect ratio of the nft needs to be 5:2.


### Add a description file to your folder

Add a description file to the data folder you just created. Your description MUST be a md-file called `description.md`.


### Add a roadmap file to your folder

Add a roadmap file to the data folder you just created. Your roadmap MUST be a md-file called `roadmap.md`.


### Add a outstanding file to your folder

Add a outstanding file to the data folder you just created. Your outstanding MUST be a md-file called `outstanding.md`.


### Add a profit-model file to your folder

Add a profit-model file to the data folder you just created. Your profit-model MUST be a md-file called `profit-model.md`.


### Add a products file to your folder

Add a products file to the data folder you just created. Your products MUST be a md-file called `products.md`.


### Add a team file to your folder

Add a team file to the data folder you just created. Your team MUST be a md-file called `team.md`.  


### Create a pull request

Open a [pull request](https://github.com/dego-launchpad/delta-list/pulls) with the changes that you've made.

### Respond to validation checks

Your pull request will be validated by a series of automated checks. If one of these checks fails, please resolve these issues and make sure that validation succeeds. We will review your pull request for final approval once automated validation succeeds.

### Wait for the project list to update automatically

Once your PR is merged, the project list will update automatically to include your token. All project list updates will be handled automatically when PRs are merged into the `master` branch.