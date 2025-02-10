import { PDFDocument } from "pdf-lib";

export function usePDF() {
  const metaData = ref();
  const pdfDoc = ref();

  function load(file: File) {
    const reader = new FileReader();
    reader.onload = async () => {
      const pdfBytes = new Uint8Array(reader.result as ArrayBuffer);
      pdfDoc.value = await PDFDocument.load(pdfBytes);

      readMetaData();
    };
    reader.readAsArrayBuffer(file);
  }

  function readMetaData() {
    metaData.value = {
      title: { label: "标题", value: pdfDoc.value.getTitle(), enableEdit: true },
      creator: { label: "创建者", value: pdfDoc.value.getCreator() },
      author: { label: "作者", value: pdfDoc.value.getAuthor(), show: true, enableEdit: true },
      keywords: { label: "关键字", value: pdfDoc.value.getKeywords(), show: true, enableEdit: true },
      subject: { label: "主题", value: pdfDoc.value.getSubject(), show: true, enableEdit: true },
      createDate: { label: "创建时间", value: pdfDoc.value.getCreationDate()?.toLocaleString() },
      modifyDate: { label: "修改时间", value: pdfDoc.value.getModificationDate()?.toLocaleString() },
    };
  }

  function updateMetaData() {
    pdfDoc.value.setTitle(metaData.value.title.value);
    pdfDoc.value.setAuthor(metaData.value.author.value);
    pdfDoc.value.setKeywords(metaData.value.keywords.value.replaceAll('，', ',').split(","));
    pdfDoc.value.setSubject(metaData.value.subject.value);
  }

  async function download(filename: string) {
    updateMetaData();

    const pdfBytes = await pdfDoc.value.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename
    a.click();
  }

  return {
    load,
    metaData,
    download,
  };
}
