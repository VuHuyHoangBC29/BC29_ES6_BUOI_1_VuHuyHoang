const tinhDTB = (...diem) => {
  let tong = 0;
  let dtb = 0;
  for (let i = 0; i < diem.length; i++) {
    tong += diem[i];
    dtb = tong / diem.length;
  }
  return dtb;
};

const getEle = (id) => document.getElementById(id);

getEle("btnKhoi1").onclick = () => {
  const diemToan = getEle("inpToan").value * 1;
  const diemLy = getEle("inpLy").value * 1;
  const diemHoa = getEle("inpHoa").value * 1;

  const dtbKhoi1 = tinhDTB(diemToan, diemLy, diemHoa);
  console.log(dtbKhoi1);
  getEle("tbKhoi1").innerHTML = dtbKhoi1;
};

getEle("btnKhoi2").onclick = () => {
  const diemVan = getEle("inpVan").value * 1;
  const diemSu = getEle("inpSu").value * 1;
  const diemDia = getEle("inpDia").value * 1;
  const diemEnglish = getEle("inpEnglish").value * 1;

  const dtbKhoi2 = tinhDTB(diemVan, diemSu, diemDia, diemEnglish);
  console.log(dtbKhoi2);
  getEle("tbKhoi2").innerHTML = dtbKhoi2;
};
