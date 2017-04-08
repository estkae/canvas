/****************************************************************
** IBM Confidential
**
** OCO Source Materials
**
** SPSS Modeler
**
** (c) Copyright IBM Corp. 2017
**
** The source code for this program is not published or otherwise
** divested of its trade secrets, irrespective of what has been
** deposited with the U.S. Copyright Office.
*****************************************************************/

// find the number of link events in event log
//
function containLinkEvent(eventLog, srcNodeId, destNodeId, eventType) {
	var count = 0;
	var elJson = JSON.parse(eventLog);
	var eventData = srcNodeId + " to " + destNodeId;
	for (var idx = 0; idx < elJson.length; idx++) {
		if (elJson[idx].event === eventType &&
			(elJson[idx].data === eventData)) {
			count++;
		}
	}
	return count;
}

// find the number of links in object model that have source and destination ids.
//
function containLinkInObjectModel(objectModel, srcNodeId, destNodeId) {
	var count = 0;
	var omJson = JSON.parse(objectModel);
	var links = omJson.diagram.links;
	for (var lidx = 0; lidx < links.length; lidx++) {
		if (links[lidx].source === srcNodeId &&
				links[lidx].target === destNodeId) {
			count++;
		}
	}
	return count;
}

// delete links in object model that have node ids.
//
function deleteLinkInObjectModel(objectModel, nodeId) {
	var count = 0;
	var omJson = JSON.parse(objectModel);
	var links = omJson.diagram.links;
	for (var lidx = 0; lidx < links.length; lidx++) {
		if (links[lidx].source === nodeId) {
			count++;
		}
	}
	return count;
}

// return the comment id from the object model
//
function getCommentIdFromObjectModel(objectModel, commentIndex) {
	var omJson = JSON.parse(objectModel);
	return omJson.diagram.comments[commentIndex].id;
}

// count the number of events in event log
//
function getEventLogCount(eventLog, eventType, eventData) {
	var count = 0;
	var elJson = JSON.parse(eventLog);
	for (var idx = 0; idx < elJson.length; idx++) {
		if (elJson[idx].event === eventType &&
			(elJson[idx].data === eventData ||
			elJson[idx].content === eventData)) {
			count++;
		}
	}
	return count;
}

// count the number of link event types in the event log
//
function getLinkEventCount(eventLog, eventType) {
	var elJson = JSON.parse(eventLog);
	var count = 0;
	for (var idx = 0; idx < elJson.length; idx++) {
		if (elJson[idx].event === eventType) {
			count++;
		}
	}
	return count;
}

// get the node id from the object model
//
function getNodeIdFromObjectModel(objectModel, nodeIndex) {
	var omJson = JSON.parse(objectModel);
	return omJson.diagram.nodes[nodeIndex].id;
}

// get a count of the number of object types in the object model
//
function getObjectModelCount(objectModel, type, compare) {
	var count = 0;
	var omJson = JSON.parse(objectModel);
	if (type === "nodes") {
		var nodes = omJson.diagram.nodes;
		for (var idx = 0; idx < nodes.length; idx++) {
			if (nodes[idx].image === compare) {
				count++;
			}
		}
	} else if (type === "comments") {
		var comments = omJson.diagram.comments;
		for (var cidx = 0; cidx < comments.length; cidx++) {
			if (comments[cidx].content === compare) {
				count++;
			}
		}
	} else if (type === "links") {
		var links = omJson.diagram.links;
		count = links.length;
	}
	return count;
}

// determine if all the nodes, comments and links are empty in the object model
//
function isObjectModelEmpty(objectModel) {
	var omJson = JSON.parse(objectModel);
	var count = omJson.diagram.nodes.length +
							omJson.diagram.comments.length +
							omJson.diagram.links.length;
	return count;
}


module.exports = {
	containLinkEvent: containLinkEvent,
	containLinkInObjectModel: containLinkInObjectModel,
    deleteLinkInObjectModel: deleteLinkInObjectModel,
	getCommentIdFromObjectModel: getCommentIdFromObjectModel,
	getEventLogCount: getEventLogCount,
	getLinkEventCount: getLinkEventCount,
	getNodeIdFromObjectModel: getNodeIdFromObjectModel,
	getObjectModelCount: getObjectModelCount,
	isObjectModelEmpty: isObjectModelEmpty
};