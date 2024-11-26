import { create } from 'lodash'
import { GroupSpending, RequestedGroup } from 'src/types/group.type'
import http from 'src/utils/http'

export const URL_GET_GROUP = '/groups/group/list'
export const URL_CREATE_GROUP = '/groups/group/create'
export const URL_UPDATE_GROUP = '/groups/group/update'
export const URL_DELETE_GROUP = '/groups/group/delete'
export const URL_GET_ALL_MEMBERS_GROUP = '/groups/user-group/list'
export const URL_GET_ALL_EVENTS_GROUP = '/groups/group-event/list'
export const URL_CREATE_EVENT_GROUP = '/groups/group-event/create'
export const URL_UPDATE_EVENT_GROUP = '/groups/group-event/update'
export const URL_DELETE_EVENT_GROUP = '/groups/group-event/delete'
export const URL_LIST_EVENT_ITEM = '/groups/event_item/list'
export const URL_CREATE_EVENT_ITEM = '/groups/event_item/create'
export const URL_UPDATE_EVENT_ITEM = '/groups/event_item/update'
export const URL_DELETE_EVENT_ITEM = '/groups/event_item/delete'
export const URL_CREATE_ITEM_SPENDING = '/group-payment/item-spending/create'
export const URL_UPDATE_ITEM_SPENDING = '/group-payment/item-spending/update'
export const URL_ADD_MEMBER = '/groups/user-group/create'
export const URL_GET_REFUND = '/group-payment/event-refund/list'
export const URL_CREATE_REFUND = '/group-payment/event-refund/create'
export const URL_TRANSFER_UPDATE_REFUND = '/group-payment/event-refund/transfer-update'
export const URL_TRANSFER_CONFIRM_REFUND = '/group-payment/event-refund/transfer-confirm'
export const URL_RECEIVE_CONFIRM_REFUND = '/group-payment/event-refund/receive-confirm'
export const URL_MEMBERS_TOTAL_SPENDING = '/groups/statistics/members-total-spending'
export const URL_RECENT_EVENT = '/groups/statistics/recent-event'
export const URL_TOP_EVENT = '/groups/statistics/top-event'

const groupApi = {
  getAllGroups() {
    return http.get(URL_GET_GROUP)
  },
  createGroup(group: RequestedGroup) {
    return http.post(URL_CREATE_GROUP, group)
  },
  getAllMembersOfGroup(id: number) {
    return http.get(`${URL_GET_ALL_MEMBERS_GROUP}/${id}`)
  },
  getAllEventsOfGroup(id: number) {
    return http.get(`${URL_GET_ALL_EVENTS_GROUP}/${id}`)
  },
  deleteGroup(id: number) {
    return http.delete(`${URL_DELETE_GROUP}/${id}`)
  },
  updateGroup(id: number, group: RequestedGroup) {
    return http.put(`${URL_UPDATE_GROUP}/${id}`, group)
  },
  getAllItemsOfEvent(id: number) {
    return http.get(`${URL_LIST_EVENT_ITEM}/${id}`)
  },
  createEvent(event: any) {
    return http.post(URL_CREATE_EVENT_GROUP, event)
  },
  updateEvent(id: number, updatedName: { name: string }) {
    return http.put(`${URL_UPDATE_EVENT_GROUP}/${id}`, updatedName)
  },
  deleteEvent(id: number) {
    return http.delete(`${URL_DELETE_EVENT_GROUP}/${id}`)
  },
  createItem(item: { event_id: number; name: string }) {
    return http.post(URL_CREATE_EVENT_ITEM, item)
  },
  updateItem(id: number, updatedItem: { name: string }) {
    return http.put(`${URL_UPDATE_EVENT_ITEM}/${id}`, updatedItem)
  },
  deleteItem(id: number) {
    return http.delete(`${URL_DELETE_EVENT_ITEM}/${id}`)
  },
  createItemSpending(id: number, spendingList: GroupSpending[]) {
    return http.post(URL_CREATE_ITEM_SPENDING, { item_id: id, spending_list: spendingList })
  },
  updateItemSpending(id: number, spendingList: GroupSpending[]) {
    return http.put(`${URL_UPDATE_ITEM_SPENDING}/${id}`, { spending_list: spendingList })
  },
  addMemberToGroup(id: number, memberIds: number[]) {
    return http.post(URL_ADD_MEMBER, { group_id: id, member_ids: memberIds })
  },
  getRefundList(eventId: number) {
    return http.get(`${URL_GET_REFUND}/${eventId}`)
  },
  createRefundList(eventId: number) {
    return http.post(`${URL_CREATE_REFUND}`, { event_id: eventId })
  },
  updateTransfer(refundId: number) {
    return http.patch(`${URL_TRANSFER_UPDATE_REFUND}/${refundId}`)
  },
  confirmTransfer(eventId: number) {
    return http.put(`${URL_TRANSFER_CONFIRM_REFUND}/${eventId}`)
  },
  confirmReceive(refundId: number) {
    return http.patch(`${URL_RECEIVE_CONFIRM_REFUND}/${refundId}`)
  },
  getMembersTotalSpending(groupId: number, startDate: Date, endDate: Date) {
    return http.get(`${URL_MEMBERS_TOTAL_SPENDING}/${groupId}?start_date=${startDate}&end_date=${endDate}`)
  },
  getRecentEvent(groupId: number, year: number) {
    return http.get(`${URL_RECENT_EVENT}/${groupId}?year=${year}`)
  },
  getTopEvent(groupId: number, year: number) {
    return http.get(`${URL_TOP_EVENT}/${groupId}?year=${year}`)
  }
}

export default groupApi
