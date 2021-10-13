import $ from 'jquery'

export default {
    install(Vue) {
        let notificatorHub = new Vue()
        notificatorHub.getMessages = (status, from, count) =>
            notificatorHub.$http.get(`api/notificator/messages/${status}/${from}/${count}`)

        notificatorHub.deleteMessages = (messages) =>
            notificatorHub.$http.delete(`api/notificator/messages/`, { data: messages })

        notificatorHub.markAsRead = (message) =>
            notificatorHub.$http.post(`api/notificator/markAsRead/${message.Id}`)

        notificatorHub.getMessagesUnread = () =>
            notificatorHub.$http.get(`api/notificator/messages/unread`)

        notificatorHub.sendMessage = (message) =>
            notificatorHub.$http.post("api/notificator/sendMessage", message);

        notificatorHub.sendProfileMessage = (message) =>
            notificatorHub.$http.post("api/notificator/SendProfileMessage", message);

        notificatorHub.sendFileMessage = (message) =>
            notificatorHub.$http.post("api/notificator/SendFileMessage", message);

        notificatorHub.getFilesLinks = async (message) =>
            (await notificatorHub.$http.get(`api/notificator/files/${message}`)).data;

        notificatorHub.toWel = async (data) =>
            (await notificatorHub.$http.post('api/notificator/towel', {data: data } )).data;

        Vue.prototype.$notificatorHub = notificatorHub

        const notificator = $.connection.notificatorHub;
      
        notificator.client.refresh = (unread) => {
            notificatorHub.$emit('refresh', unread)
            console.log("refresh")
        };
        notificator.client.newMessage = (message) => {
            notificatorHub.$emit('refresh', message.Unread)

            notificatorHub.$toasted.show(
                `<span class='label label-success'>${message.Message.FromUserName}</span>&nbsp;
                 <span><font color="cyan"><small><i>${notificatorHub.$reportServices.format(message.Message.Timestamp)}</i></small></font></span>&nbsp;
                 <span>${message.Message.Text}</span>`
                , {
                action: {
                    text: 'Mark as read',
                    onClick: async (e, toastObject) => {
                        await notificatorHub.markAsRead(message.Message);
                        toastObject.goAway(0);
                    }
                },
                duration: notificatorHub.$reportServices.getToasterTimeout()
            });


            console.log("newMessage");
        };
        // Forward server side SignalR events through $questionHub, where components will listen to them

    },
}

