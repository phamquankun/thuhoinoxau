import hvd from "@/public/images/hvd.jpg";
import lenam from "@/public/images/lenam.png";
import thanhtung from "@/public/images/thanhtung.png";
import mantran from "@/public/images/mantran.png";
import xuanloc from "@/public/images/xuanloc.png";
import huunhan from "@/public/images/huunhan.png";
import duyminh from "@/public/images/duyminh.png";
import Image from "next/image";

const options = [
  {
    avt: hvd,
    name: "Hoàng Văn Dũng",
    price: "48.000",
  },
  {
    avt: lenam,
    name: "Hoàng Lê Nam",
    price: "48.000",
  },
  {
    avt: duyminh,
    name: "Lê Duy Minh",
    price: "48.000",
  },
  {
    avt: huunhan,
    name: "Đàm Hữu Nhân",
    price: "48.000",
  },
  {
    avt: xuanloc,
    name: "Trần Xuân Lộc",
    price: "48.000",
  },
  {
    avt: mantran,
    name: "Trần Minh Mẫn",
    price: "26.000",
  },
  {
    avt: lenam,
    name: "Trịnh Ngọc Vĩnh",
    price: "26.000",
  },
  {
    avt: thanhtung,
    name: "Trần Thanh Tùng",
    price: "26.000",
  },
];

export default function Home() {
  return (
    <div className="p-6">
      <div className="text-center border border-red-500 p-4">
        <h1 className="text-3xl">Có nợ, có trả ={">"} bạn tốt</h1>
        <h2 className="text-4xl font-semibold text-red-500">
          Có nợ, không trả ={">"} bạn buồi
        </h2>
      </div>
      <div className="border border-green-700 p-4 text-center mt-4">
        <span className="text-3xl font-semibold text-green-600">
          Momo - <span>0934824319</span>
        </span>
        <br />
        <span className="text-3xl font-semibold text-green-600">
          Tpbank - quanpt125 - 0943824319
        </span>
      </div>
      <div className="border border-yellow-700 p-4 text-center mt-4">
        <span className="text-3xl font-semibold text-red-500">
          Cá viên chiên (Quân Lộc Nhân Minh Nam Dũng) - 130k - 22k/người
        </span>
        <br />
        <span className="text-3xl font-semibold text-red-500">
          Tiền nước (Quân Lộc Nhân Dũng Minh Nam Tùng Mẫn Vĩnh) - 230k -
          26k/người
        </span>
      </div>
      <div className="flex items-center gap-4 mt-5 flex-wrap justify-center">
        {options.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border border-gray-500 p-4"
          >
            <div className="w-[250px] h-[180px] relative">
              <Image src={item.avt} alt="logo" layout="fill" />
            </div>
            <span>{item.name}</span>
            <span className="font-semibold text-red-500 text-3xl">
              {item.price} VND
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
