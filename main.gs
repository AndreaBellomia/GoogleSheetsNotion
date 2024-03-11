const NOTION_TOKEN = "integration_Notion_tocken";
const NOTION_DATABASE_ID = "numeric_page_token btweeen notion.so/ and ?=";
const NOTION_URL = "https://api.notion.com/v1/";

const NOTION_ENDPOINT = {
  taskDb: (id) => NOTION_URL + `databases/${id}/query`,
  taskDbAdd: NOTION_URL + `pages/`
}

function initAuth () {
  SpreadsheetApp.openById("google sheets id").getSheetByName("googel sheets name of sheet")
}

function onChange(e) {
  const sheet = e.source.getSheetByName("googel sheets name of sheet")
  const rowId = e.range.getRow()
  const rowValue = sheet.getRange(`${rowId}:${rowId}`).getValues()[0];

  console.log(rowValue)
  const response = postData(rowValue)

  console.log(response)
  const notionId = response.url.split('https://www.notion.so/')[1]
  sheet.getRange("A" + rowId).setValue(notionId)
}
