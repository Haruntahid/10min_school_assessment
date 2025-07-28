import React from "react";

function FreeItem() {
  return (
    <>
      <p className="text-[26px] font-semibold my-5">
        Free items with this products-
      </p>
      <div
        className="w-full bg-cover  rounded-2xl p-4"
        style={{
          backgroundImage:
            "url('https://cdn.10minuteschool.com/images/banner_background_1731401239364.png')",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between p-7 gap-8 rounded-2xl text-white border-2 border-cyan-50">
          {/* Left Side */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">
              ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
            </h2>
            <ul className="space-y-1 text-[16px]">
              <li className="flex items-start gap-2">• 360 পৃষ্ঠা</li>
              <li className="flex items-start gap-2">• প্রিমিয়াম হার্ডকপি</li>
              <li className="flex items-start gap-2">• ফ্রি ডেলিভারি</li>
              <li className="flex items-start gap-2">
                • ৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="md:w-1/3 flex justify-center">
            <div className="rounded-xl">
              <img
                src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png?w=120&h=150"
                alt="Hardcopy Book"
                className="w-[120px] h-[150px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeItem;
