# GoogleSheetsNotion
Google Apps Script integration to automatically transfer data from Google Sheets to Notion Database

## For use you need:
- Create a notion page with database (free choice structure)
- Create a private Notion integration https://www.notion.so/my-integrations/ (copy integration tocken)
- Create a nuw Foogle Sheets file

## Setup Guide:
- Go to Google Sheets, In `Extensions -> Apps Scripts`
- Copy the file in this repo to Apps Scripts
- Edit file variable with your personali varaible
  - NOTION_TOKEN ->  notion integration tocken
  - NOTION_DATABASE_ID  -> [Get notion database id](https://developers.notion.com/reference/retrieve-a-database)
  - Google Sheet id -> [Google's DOCS](https://developers.google.com/sheets/api/guides/concepts?hl=it)
  - Google Sheet sheet name
- Edit NotionAPI.gs -> postData payload with your notion query structure, check notion docs for build the correct payload query
- Go to Apps Script `Activator` and create a new trigger with your preferences. Remeber link to the trigger the onChange function.
- Test all it work editing Sheets file
- Deploy Apps Scripts. 
