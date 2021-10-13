<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="StartPage.aspx.cs" Inherits="WebPortal.StartPage" %>

<%@ OutputCache Location="None" VaryByParam="None" %>

<%--<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>--%>



<%--<asp:Content ID="MainContent" ContentPlaceHolderID="MainContent" runat="server">
</asp:Content>--%>

<html>
<head id="MainHead" runat="server">
    <title>Dream Report Portal</title>
    <meta http-equiv="x-ua-compatible" content="IE=Edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="Scripts/browser_defaults.js" type="text/javascript"></script>

    <script src="Scripts/MicrosoftAjax.Debug.js" type="text/javascript"></script>
    <script src="Scripts/XMLHttpRequest_Interceptor.js"></script>

    <%--<script src="Scripts/jquery.min.js"></script>--%>
	<script src="Scripts/jquery-3.5.1.min.js"></script>

    <script src="Scripts/jquery.signalR-2.2.2.min.js"></script>
    <script src="signalr/hubs" type="text/javascript"></script>

    <script type="text/javascript" src="Scripts/string.format.js"></script>

    <script type="text/javascript" src="Scripts/jquery.reports.queue.js"></script>

    <script type="text/javascript" src="Scripts/jquery-ui.min.js"></script>

    <script src="css/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>


    <link type="text/css" href="css/calendar.css" rel="stylesheet" />
    <link type="text/css" href="css/jquery-ui.css" rel="stylesheet" />
    <link type="text/css" href=<%="'theme/bootstrap.min.css?v="+ DateTime.Now.ToString("yyyyMMddhhmmss") +"'"%> rel="stylesheet" />

    <link href="css/bootstrap/fa/css/font-awesome.css" rel="stylesheet" type="text/css" />
    <link type="text/css" href="css/layout-default.css" rel="stylesheet" />
    <link type="text/css" href="css/NoSkin.css" rel="stylesheet" />
</head>

<body>
    <form id="MainForm" runat="server">

        <asp:ScriptManager ID="MasterScriptManager" runat="server" EnablePartialRendering="true" />

        <asp:Panel HorizontalAlign="Center" runat="server">
            <asp:Image ID="WaitImage" runat="server" ImageUrl="~/Images/DreamReportSpinnerOnWhite.gif" />
            <asp:UpdatePanel ID="UpdPanel" runat="server" UpdateMode="Conditional">
                <ContentTemplate>
                    <asp:Timer ID="ReloadTimer" runat="server" Interval="1000"
                        OnTick="ReloadTimer_Tick">
                    </asp:Timer>
                    <asp:Label ID="DefaultMessage" runat="server" />
                </ContentTemplate>
            </asp:UpdatePanel>
        </asp:Panel>
    </form>
</body>
</html>
