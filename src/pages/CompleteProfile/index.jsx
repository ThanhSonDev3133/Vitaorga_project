import React, { useState } from "react";
import "./index.css";
import img_bg from "../../assets/img/Images.png";
export default function CompleteProfile() {
  const [urlImgUp, seturlImgFront] = useState(null);
  const [urlImgDown, seturlImgBack] = useState(null);
  const [form, setForm] = useState({
    Image_Up: "",
    Image_Down: "",
  });
  const handlePostChangeUp = (e) => {
    seturlImgFront(e.target.files[0]);
    setForm({
      ...form,
      Image_Up: URL.createObjectURL(e.target.files[0]),
    });
  };
  console.log("urlImgUp", urlImgUp);
  const handlePostChangeDown = (e) => {
    seturlImgBack(e.target.files[0]);
    setForm({
      ...form,
      Image_Down: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <div className="container_">
      <header>Hoàn Thiện Hồ Sơ</header>
      <form action="#">
        <div className="details personal">
          <span className="title">Thông tin địa chỉ</span>
          <div className="fields">
            <div class="input-field">
              <label>Tỉnh / Thành Phố</label>
              <select required>
                <option disabled selected>
                  Chọn
                </option>
                <option>Hồ Chí Minh</option>
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
              </select>
            </div>
            <div class="input-field">
              <label>Huyện / Quận</label>
              <select required>
                <option disabled selected>
                  Chọn
                </option>
                <option>Quận Tân Bình</option>
                <option>Quận Bình Thạnh</option>
                <option>Quận Gò Vấp</option>
              </select>
            </div>
            <div class="input-field">
              <label>Xã / Phường</label>
              <select required>
                <option disabled selected>
                  Chọn
                </option>
                <option>Hồ Chí Minh</option>
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
              </select>
            </div>
            <div className="input-field input-fields">
              <label>Đường / Số Nhà</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
          </div>
        </div>
        <div className="details personal">
          <span className="title">Thông tin liên hệ</span>
          <div className="fields">
            <div class="input-field">
              <label>Số điện thoại</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
            <div class="input-field">
              <label>Email</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
            <div class="input-field">
              <label>Facebook</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
            <div class="input-field">
              <label>Zalo</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
          </div>
        </div>
        <div className="details personal">
          <span className="title">Người thân</span>
          <div className="fields">
            <div class="input-field">
              <label>Số điện thoại</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
            <div class="input-field">
              <label>Email</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
            <div class="input-field">
              <label>Facebook</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
          </div>
        </div>
        <div className="details personal">
          <span className="title">Kỹ năng</span>
          <div className="fields">
            <div class="input-field">
              <label>Tài lẻ</label>
              <select required>
                <option disabled selected>
                  Chọn
                </option>
                <option>Hàn</option>
                <option>Điện</option>
                <option>Thợ xây</option>
                <option>Nấu ăn</option>
                <option>Ca hát</option>
              </select>
            </div>
          </div>
        </div>
        <div className="details personal">
          <span className="title">Sức khỏe</span>
          <div className="fields">
            <div class="input-field">
              <label>Chiều cao</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
            <div class="input-field">
              <label>Cân nặng</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
            <div class="input-field">
              <label>Dị tật ngoại hình</label>
              <input type="text" placeHolder="Nhập thông tin" required />
            </div>
          </div>
        </div>
        <div className="gender">
          <span className="title">Giới tính</span>
          <div className="gender-field">
            <div className="gender-select">
              <input type="radio" name="gender" id="gender" />
              <label htmlFor="nam">Nam</label>
            </div>

            <div className="gender-select">
              <input type="radio" name="gender" id="gender" />
              <label htmlFor="nu">Nữ</label>
            </div>

            <div className="gender-select">
              <input type="radio" name="gender" id="gender" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="details personal">
          <span className="title">Sở thích</span>
          <div className="fields">
            <div class="input-field">
              <label>Xem phim</label>
              <select required>
                <option disabled selected>
                  Quốc gia / Thể loại
                </option>
                <option>Mỹ</option>
                <option>Anh</option>
                <option>Pháp</option>
                <option>Việt Nam</option>
              </select>
            </div>
            <div class="input-field">
              <label>Nghe nhạc</label>
              <select required>
                <option disabled selected>
                  Chọn
                </option>
                <option>Quê hương</option>
                <option>Sôi động</option>
                <option>Thính phòng</option>
                <option>Khác</option>
              </select>
            </div>
            <div class="input-field">
              <label>Đọc sách</label>
              <select required>
                <option disabled selected>
                  Chọn
                </option>
                <option>Tiểu thuyết</option>
                <option>Kinh doanh</option>
                <option>Nấu ăn</option>
              </select>
            </div>
            <div class="input-field">
              <label>Thể thao</label>
              <select required>
                <option disabled selected>
                  Chọn
                </option>
                <option>Đá bóng</option>
                <option>Tenis</option>
                <option>Cầu lông</option>
              </select>
            </div>
          </div>
        </div>
        <div className="citizenship">
          <span className="title">Ảnh CCCD</span>
          <div className="citizenship-img">
            <div className="img-profile">
              {form.Image_Up ? (
                <img src={form.Image_Up} alt="" className="img-bg" />
              ) : (
                <img src={img_bg} alt="" className="img-bg" />
              )}
              <label htmlFor="icon-button-file-up">
                <i class="fa fa-camera text-dark"></i>Mặt Trước
              </label>
              <input
                style={{ display: "none" }}
                id="icon-button-file-up"
                type="file"
                name="Image_Up"
                onChange={handlePostChangeUp}
              />
            </div>
            <div className="img-profile">
              {form.Image_Down ? (
                <img src={form.Image_Down} alt="" className="img-bg" />
              ) : (
                <img src={img_bg} alt="" className="img-bg" />
              )}
              <label htmlFor="icon-button-file-down">
                <i class="fa fa-camera text-dark"></i>Mặt Sau
              </label>
              <input
                style={{ display: "none" }}
                id="icon-button-file-down"
                type="file"
                name="Image_Down"
                onChange={handlePostChangeDown}
              />
            </div>
          </div>
        </div>
        <div className="">
          <button className="btn">
            <span className="btnText">Cập nhật</span>
          </button>
        </div>
      </form>
    </div>
  );
}
