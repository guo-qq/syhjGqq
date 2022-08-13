import { request } from "@/utils/service"
export function savaNewAuditFlowInfo(data: any) {
  return request({
    url: "/api/services/app/AuditFlow/SavaNewAuditFlowInfo",
    method: "post",
    data
  })
}
export function getAllAuditFlowIds() {
  return request({
    url: "/api/services/app/AuditFlow/GetAllAuditFlowIds",
    method: "get"
  })
}
