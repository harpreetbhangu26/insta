"use client";
import { useParams } from "next/navigation";

function UserPage() {
  const params = useParams();
  return <div>User Id = {params.id}</div>;
}

export default UserPage;
