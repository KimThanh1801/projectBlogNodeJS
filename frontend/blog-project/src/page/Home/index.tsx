import CreatePost from "../../core/components/blog/CreatePost";
import { PostCard } from "../../core/components/blog/PostCard";

export default function Home() {
  const posts = [
    {
      author: {
        name: "Nguyễn Văn An",
        avatar:
          "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482740lTq/anh-mo-ta.png",
        time: "2 giờ trước",
      },
      content: "Hôm nay thời tiết thật đẹp!",
      image:
        "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482740lTq/anh-mo-ta.png",
      likes: 124,
      commentCount: 23,
      comments: [
        { id: 1, author: "Mai", content: "Đẹp thật 😍" },
        { id: 2, author: "Hùng", content: "Trời mát ghê" },
        { id: 3, author: "Lan", content: "Đi chơi thôi" },
        { id: 4, author: "Tuấn", content: "Chụp ảnh ở đâu vậy?" },
      ],
      shares: 8,
    },

    {
      author: {
        name: "Trần Thị Mai",
        avatar: "/placeholder.svg",
        time: "4 giờ trước",
      },
      content:
        "Vừa hoàn thành dự án mới! Cảm ơn team đã hỗ trợ nhiệt tình 🎉",
      likes: 89,
      commentCount: 15,
      comments: [],
      shares: 3,
    },

    {
      author: {
        name: "Lê Văn Hùng",
        avatar: "/placeholder.svg",
        time: "6 giờ trước",
      },
      content:
        "Chia sẻ một số tips làm việc hiệu quả hơn...",
      image: "/productivity-workspace-desk-setup.jpg",
      likes: 256,
      commentCount: 42,
      comments: [],
      shares: 18,
    },

    {
      author: {
        name: "Phạm Thị Hương",
        avatar: "/placeholder.svg",
        time: "8 giờ trước",
      },
      content:
        "Cuối tuần này có ai muốn cùng đi cafe không?",
      likes: 67,
      commentCount: 31,
      comments: [],
      shares: 5,
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffe4e6" }}>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
        <CreatePost />

        <div style={{ marginTop: 24 }}>
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}
