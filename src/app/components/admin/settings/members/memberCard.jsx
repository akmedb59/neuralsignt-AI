import React from "react";
import Image from "next/image";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Link from "next/link";
const MemberCard = ({ data }) => {
  return (
    <tr className="border-b text-xs">
      <td className="flex items-center gap-3 py-3">
        <div>
          <Image
            src="/1.webp"
            alt="avatar"
            width={35}
            height={35}
            className="aspect-square rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold">{data.name}</p>
          <p className=" font-light">{data.email}</p>
        </div>
      </td>
      <td>12/12/2021</td>
      <td>12/12/2021</td>
      <td className="w-fit">
        <div className="mx-auto w-fit rounded-md bg-btpurple px-2 py-1 text-sm text-white">
          <select
            name="roleSelector"
            id=""
            className="bg-btpurple outline-none selection:outline-none"
          >
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
        </div>
      </td>
      <td>
        <Link href={"/admin/userprofile/user-1"} className="hover:underline">
          Details
        </Link>
      </td>
      <td className="w-fit">
        <div className="text-base">
          <RiDeleteBin6Fill />
        </div>
      </td>
    </tr>
  );
};

export default MemberCard;
