/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "MyApi": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "MyWebsite": {
      "type": "sst.aws.StaticSite"
      "url": string
    }
  }
}
export {}
