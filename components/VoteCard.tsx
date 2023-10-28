"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Eye, Vote } from "lucide-react";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { auth } from "./firebase/config";
import { db } from "./firebase/config";
import { useToast } from "./ui/use-toast";

interface VoteCardProps {
  title: string;
  description: string;
  votes: any[];
  image: string;
  tipModalitate: string;
  perioada: string;
  id: string;
}

const VoteCard = ({
  title,
  description,
  votes,
  image,
  tipModalitate,
  perioada,
  id,
  ...props
}: VoteCardProps) => {
  const [alreadyVoted, setAlreadyVoted] = useState(true);
  const { toast } = useToast();
  const user = auth.currentUser || null;

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      if (votes.includes(uid)) {
        setAlreadyVoted(true);
      } else {
        setAlreadyVoted(false);
      }
    } else {
      setAlreadyVoted(true);
    }
  }, [user]);



  const handleVote = async () => {
    const postRef = doc(db, "posts", id);

    await updateDoc(postRef, {
      votes: [...votes, user?.uid],
    });
    setAlreadyVoted(true);

    toast({
      title: "Ai votat cu succes!",
      description: "Mulțumim pentru votul tău.",
    });
  };

  return (
    <Card className={"w-full"} {...props}>
      <CardHeader className="p-3">
        <div className="w-full aspect-video rounded-lg mb-3 relative overflow-hidden">
          <Image
            src={image}
            alt={"logo"}
            fill
            className=" object-cover"
            priority={false}
          />
          <Link
            href="/postare"
            passHref
            className="absolute opacity-0 hover:opacity-100 top-0 right-0 grid w-full h-full place-content-center bg-black/30 transition-opacity"
          >
            <Eye size={36} className="text-white" />
          </Link>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-xl p-0 m-0 leading-none line-clamp-1">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-1">
              {description}
            </CardDescription>
          </div>
          <div className="flex flex-col text-center border p-2 rounded-sm">
            <h2 className="text-3xl font-bold ">{votes.length}</h2>
            <p className="text-xs text-muted-foreground">voturi</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 px-4 border-t py-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Perioadă mobilitate
            </span>
            <span className="text-sm  font-semibold">{perioada}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Tip mobilitate
            </span>
            <span className="text-sm font-semibold">{tipModalitate}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter
        className={"flex justify-between items-center gap-2 px-3 border-t py-3"}
      >
        <Button variant={"outline"} className="w-1/2">
          Vezi postarea
        </Button>
        <Button
          variant={"default"}
          className="w-1/2"
          disabled={alreadyVoted}
          onClick={handleVote}
        >
          Votează
          <Vote size={20} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VoteCard;
