function postData(data) {
  console.log("Data to notion", data)
  const url = NOTION_ENDPOINT.taskDbAdd;
  // Define template line your database pattern, use notion API reference for build a correct schema https://developers.notion.com/reference/property-schema-object#date-configuration
  const payload = {
    "parent" : { "database_id" : NOTION_DATABASE_ID },
	  "properties": {
      "Name": {
        "title": [{ "text": { "content": `"${data[0]}"` } }]
      },
      "Description": {
        "rich_text": [{ "text": { "content": `"${data[1]}"` } }]
      }
    }
  }

  var response_data = notionApiRequest(url, payload, "POST");
  return response_data;
}

function getResponse() {
  const url = NOTION_ENDPOINT.taskDb(NOTION_DATABASE_ID);
  const payload = {
    sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
  };
  var response_data = notionApiRequest(url, payload, "POST");
  return response_data;
}


function notionApiRequest(url, payload_dict, method = "POST") {
  const options = {
    method: method,
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    muteHttpExceptions: true,
    ...(payload_dict && { payload: JSON.stringify(payload_dict) }),
  };

  const response = UrlFetchApp.fetch(url, options);

  if (response.getResponseCode() === 200) {
    const response_data = JSON.parse(response.getContentText());
    if (response_data.length == 0) {
      throw new Error(
        "No data returned from Notion API. Check your Notion token."
      );
    }
    return response_data;
  } else if (response.getResponseCode() === 401) {
    throw new Error("Notion token is invalid.");
  } else {
    throw new Error(response.getContentText());
  }
}

