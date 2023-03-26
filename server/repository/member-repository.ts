import connection from "../db";
import type { RowDataPacket } from "mysql2";

interface Member extends RowDataPacket {
  id: string;
  name: string;

  email: string;

  age: string;
}
export const listMembersFromDb = async () => {
  const [rows] = await connection.execute<Member[]>(
    "Select * from member limit 5"
  );
  console.log(rows);
  return rows;
};

export const createMemberInDb = async () => {
  const sql =
    "Insert into member (name,email,age) values (:userId,:name,:email,:age)";
  const [rows] = await connection.execute(sql, [
    {
      userId: "user-id",
      name: "john doe",
      email: "johndoe@gmail.com",
      age: "35",
    },
  ]);
  return rows;
};

export const getMemberByIdFromDb = async (id: string) => {
  const sql = "Select * from member where id = :id";
  const [rows] = await connection.execute<Member[]>(sql, [{ id: id }]);
  return rows;
};
