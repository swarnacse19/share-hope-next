import dbConnect from "@/lib/dbConnect";

export async function GET(req, { params }) {
  try {
    const users = dbConnect("users");
    const user = await users.findOne({ email: params.email });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
