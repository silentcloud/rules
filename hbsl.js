var body = $response.body;

let obj = JSON.parse(body);
obj.data["isResourcesVip"] = 1;
obj.data["isVip"] = 1;
obj.data["endTime"] = "2029-01-01";
body = JSON.stringify(obj);

$done({ body });
