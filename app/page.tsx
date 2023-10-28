"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { collection, onSnapshot, query } from "firebase/firestore";

import { AlertCircle } from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";
import VoteCard from "@/components/VoteCard";
import { db } from "@/components/firebase/config";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  // const q = query(collection(db, "posts"));
  // onSnapshot(q, (querySnapshot) => {
  //   const posts: any[] = [];
  //   querySnapshot.forEach((doc) => {
  //     posts.push(doc.data());
  //   });
  //   setPosts(posts as any[]);
  //   setLoading(false);
  // });

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="w-full mt-4">
        <Alert className="bg-blue-100 border-none">
          <AlertCircle size={24} className="text-blue-900" />
          <AlertTitle className="ml-4 text-blue-800">
            Premierea participanților!
          </AlertTitle>
          <AlertDescription className="ml-4 text-blue-900">
            Rezultatele finale și premierea participanților vor avea loc pe data
            de 30 Octombrie în Amfiteatru A4 a Universității din Petroșani la
            ora 13:00.
          </AlertDescription>
        </Alert>
      </div>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4 my-4 w-full">
        {loading ? (
          <SkeletonCard />
        ) : (
          posts && posts?.map((post) => (
            <VoteCard
              key={post.title.toLowerCase().replace(" ", "-")}
              title={post.title}
              description={post.description}
              votes={post.votes}
              image={post.image}
              tipModalitate={post.tipModalitate}
              perioada={post.perioada}
              id={post.title.toLowerCase().replace(" ", "-")}
            />
          ))
        )}
      </section>
    </main>
  );
}
