import dbConnect from "@/lib/dbConnect";

export async function PATCH(req) {
  try {
    const { email, updatedData } = await req.json();
    const users = dbConnect("users");

    const result = await users.updateOne(
      { email },
      { $set: updatedData }
    );

    if (result.modifiedCount > 0) {
      return Response.json({ success: true, message: "Profile updated" });
    }

    return Response.json({ success: false, message: "No changes made" });
  } catch (error) {
    console.error("Error updating user:", error);
    return Response.json({ success: false, message: "Update failed" }, { status: 500 });
  }
}
