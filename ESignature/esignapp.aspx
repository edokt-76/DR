<%@ Page Language="C#" AutoEventWireup="true"   CodeBehind="esignapp.aspx.cs" Inherits="WebPortal.EsignApp" %>
<!DOCTYPE html>

<html>
<head>
    <title></title>
	<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link type="text/css" href=<%="'../theme/bootstrap.min.css?v="+ DateTime.Now.ToString("yyyyMMddhhmmss") +"'"%> rel="stylesheet" />
    <link href="../css/bootstrap/fa/css/font-awesome.css" rel="stylesheet" type="text/css" />
    <%--<link href="scripts/dist/bundle.css" rel="stylesheet" type="text/css">--%>
    
    <script src="../Scripts/MicrosoftAjax.js" type="text/javascript"></script>
    <script src="../WebApi/WebCmd.svc/js"></script>
    <script src="../WebApi/Report.svc/js"></script>
    <script src="../Scripts/XMLHttpRequest_Interceptor.js"></script>
</head>
<body>
   <app > </app>
    <script>
        var globalHomePage="../";
    </script>
   <script src="scripts/dist/build.js"></script>

</body>
</html>
