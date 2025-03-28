import { Flex } from "@chakra-ui/react";

import { v4 as uuid } from "uuid";

import { SearchBox } from "@/features/top/components/search";
import { ThreadBox } from "@/features/top/components/thread-box";
import { ThreadData } from "@/features/top/types/thread";
import { useState } from "react";

const Top = () => {
  const [threads, setThreads] = useState<ThreadData[]>([
    {
      id: 1,
      user_id: "user1",
      title: "地動説の証明の仕方",
      posted_time: new Date(2020, 1, 3, 4, 5, 6),
      contents:
        "地動説は証明できます。\nまず、フーコーの振り子実験を考えてみましょう。\nこの実験は、地球が自転していることを直接的に示す証拠となります。また、コリオリの力も地球の自転によって生じる現象です。これらの現象を観察することで、地球が自転していることを確認できます。さらに、人工衛星の軌道や、恒星の年周視差なども、地球が太陽の周りを公転していることを示す証拠となります。\nこれらの証拠を総合的に考えると、地動説は疑いようのない事実と言えるでしょう。",
      comments: 10,
      isPinned: false,
    },
    {
      id: 2,
      user_id: "user1",
      title: "2 test title desu!!!",
      posted_time: new Date(2020, 1, 4, 4, 5, 6),
      contents: "地動説は証明できます",
      comments: 0,
      isPinned: false,
    },
    {
      id: 3,
      user_id: "user1",
      title: "3 test title desu!!!",
      posted_time: new Date(2020, 1, 5, 4, 5, 6),
      contents: "地動説は証明できます",
      comments: 60,
      isPinned: false,
    },
    {
      id: 4,
      user_id: "user1",
      title: "4 test title desu!!!",
      posted_time: new Date(2020, 1, 6, 4, 5, 6),
      contents: "地動説は証明できます",
      comments: 250,
      isPinned: false,
    },
    {
      id: 5,
      user_id: "user1",
      title: "5 test title desu!!!",
      posted_time: new Date(2020, 1, 7, 4, 5, 6),
      contents: "地動説は証明できます",
      comments: 1000,
      isPinned: false,
    },
    {
      id: 6,
      user_id: "user1",
      title: "5 test title desu!!!",
      posted_time: new Date(2020, 1, 7, 4, 5, 6),
      contents: "地動説は証明できます",
      comments: 1000,
      isPinned: false,
    },
    {
      id: 7,
      user_id: "user1",
      title: "5 test title desu!!!",
      posted_time: new Date(2020, 1, 7, 4, 5, 6),
      contents: "地動説は証明できます",
      comments: 1000,
      isPinned: false,
    },
  ]);

  const addBookmark = (id: number) => {
    const newThread: ThreadData[] = threads.map((thread) =>
      thread.id === id ? { ...thread, isPinned: !thread.isPinned } : thread
    );
    setThreads(newThread);
  };

  return (
    <>
      <Flex
        id="search"
        w="75%"
        justifyContent="center"
        alignItems="center"
        borderRadius="md"
        paddingBottom="1%"
      >
        <SearchBox />
      </Flex>
      <Flex
        id="threads"
        w="90%"
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap="3"
        borderRadius="md"
        m="5"
      >
        {threads.map((thread) => (
          <ThreadBox key={uuid()} thread={thread} addBookmark={addBookmark} />
        ))}
      </Flex>
    </>
  );
};

export default Top;
