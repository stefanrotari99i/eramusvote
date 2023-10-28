"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { getDatabase, ref, } from "firebase/database";
import { useEffect, useState } from "react";

import { AlertCircle } from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";
import VoteCard from "@/components/VoteCard";
import { db } from "@/components/firebase/config";
import { getDocs } from "firebase/firestore";

const VOTE_CARDS = [
  {
    title: "Stefan Rotari",
    description: "Spania, Barcelona",
    votes: 26,
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tipModalitate: "Studii",
    perioada: "22 Oct - 30 Ian",
  },
  {
    title: "Fonariuc Ecatarina",
    description: "Viena, Austria",
    votes: 122,
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=2944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tipModalitate: "Practica",
    perioada: "22 Mai - 30 Iun",
  },
  {
    title: "Oleg Cebotari",
    description: "Londra, Marea Britanie",
    votes: 76,
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&q=80&w=2292&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tipModalitate: "Studii",
    perioada: "22 Oct - 30 Ian",
  },
];

export default function Home() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    async function getPosts() {
      const q = query(collection(db, "posts"));
      
      onSnapshot(q, (querySnapshot) => {
        const posts: any[] = [];
        querySnapshot.forEach((doc) => {
          posts.push(doc.data());
        });
        setPosts(posts as any[]
        );
      }
      );
      setLoading(false);
    }
    getPosts()
    } , [])

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
        posts?.map((post) => (
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
        )))}
      </section>
    </main>
  );
}
