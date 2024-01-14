'use client';
// @ts-ignore
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import React from "react";

// propertyId: string.isRequired,
// widgetId: string.isRequired,
// customStyle: object,
// embedId: string,
// basePath: string,
// onLoad: func,
// onStatusChange: func,
// onBeforeLoad: func,
// onChatMaximized: func,
// onChatMinimized: func,
// onChatHidden: func,
// onChatStarted: func,
// onChatEnded: func,
// onPrechatSubmit: func,
// onOfflineSubmit: func,
// onChatMessageVisitor: func,
// onChatMessageAgent: func,
// onChatMessageSystem: func,
// onAgentJoinChat: func,
// onAgentLeaveChat: func,
// onChatSatisfaction: func,
// onVisitorNameChanged: func,
// onFileUpload: func,
// onTagsUpdated: func,
// onUnreadCountChanged: func

// https://help.tawk.to/article/react-js
const TawkTo = () => {
  return (
    <TawkMessengerReact
      propertyId={process.env.TAWKTO_PROPERTY_ID}
      widgetId={process.env.TAWKTO_WIDGET_ID}
    />
  );
};

export default TawkTo;