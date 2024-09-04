/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "MyWebsite": {
      "type": "sst.aws.StaticSite"
      "url": string
    }
    "dataApi": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
  }
}
export {}
