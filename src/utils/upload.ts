import { ElLoading, ElMessage } from "element-plus"

export const handleGetUploadProgress = (event: any) => {
  const loading = ElLoading.service({
    lock: true,
    text: "正在上传中",
    background: "rgba(0, 0, 0, 0.7)"
  })
  if (event.percent === 100) {
    loading.close()
  }
}

export const handleUploadError = () => {
  ElMessage.error("上传失败")
}
