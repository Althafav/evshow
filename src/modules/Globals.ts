import { createDeliveryClient } from "@kontent-ai/delivery-sdk";

const isDevMode = process.env.NODE_ENV !== "production";

export const deliveryClient = createDeliveryClient({
  environmentId: "9440fe89-4371-0034-df95-ca61aae74cc3",
  secureApiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwYTk3ZTVhY2JkNmU0ZTBkOTYzMTNmNjBlNmU1ZWRiMSIsImlhdCI6MTc2NTUzODM2NiwibmJmIjoxNzY1NTM4MzY2LCJleHAiOjE3OTcwNzQyODAsInZlciI6IjIuMC4wIiwic2NvcGVfaWQiOiIwNDgwZTk2NmI0MzU0ODk5OWZhY2QwYWEyNTA5NzQxMiIsInByb2plY3RfY29udGFpbmVyX2lkIjoiMDUzMWU0Mjg5ZTJmMDBkZmI5NGM1MDE4ZDY5NjU2ZmIiLCJhdWQiOiJkZWxpdmVyLmtvbnRlbnQuYWkifQ.IAr1X9UctnQuGLmZzqY2Eg5TW4Oz95olQoCy28EEhfc",
  defaultQueryConfig: {
    useSecuredMode: true,
  },
  // previewApiKey:
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwYTkwNDJhNDk5M2E0YjhiYmYwOWUzNjdjMjdkZmNmNCIsImlhdCI6MTYyNjMzMjAzMywibmJmIjoxNjI2MzMyMDMzLCJleHAiOjE5NzE5MzIwMzMsInZlciI6IjEuMC4wIiwicHJvamVjdF9pZCI6IjYxNTU3N2I5NGUyYjAwNzRiNGY4MjBmMTFkMzBmNWFlIiwiYXVkIjoicHJldmlldy5kZWxpdmVyLmtlbnRpY29jbG91ZC5jb20ifQ.i-vTrzjCjpRVPOhrSZpX1gAiZNsW0UCWvxzQyEF5p6U",
  // excludeArchivedItems: false,
  // defaultQueryConfig: {
  //   usePreviewMode: true,
  // },
});

export const EventID = "04f6919c-7c2c-4397-b46c-efcfcab1539a";
export const SITE_NAME = "AIM";
export const SITE_URL = "https://www.aimcongress.com/";
