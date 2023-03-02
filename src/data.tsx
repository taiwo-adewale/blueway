import { images } from "./constants";

interface linksType {
  linkName: string;
  linkUrl: string;
}

interface tagsType {
  tag: string;
  url: string;
  color: string;
}

interface comments {
  commenter: string;
  image: string;
  timeSpent: number;
  comment: string;
  likes: number;
  comments?: comments[];
}

interface Author {
  name: string;
  image: string;
}

export interface postsType {
  id: number;
  title: string;
  url: string;
  image: string;
  date: string;
  minsToRead: number;
  author: Author;
  tags: tagsType[];
  body: React.ReactNode;
  comments?: comments[];
  excerpt: string;
}

export const links: linksType[] = [
  {
    linkName: "home",
    linkUrl: "/",
  },
  {
    linkName: "membership",
    linkUrl: "/membership",
  },
  {
    linkName: "#tag",
    linkUrl: "/tags",
  },
  {
    linkName: "about",
    linkUrl: "/about",
  },
  {
    linkName: "contact",
    linkUrl: "/contact",
  },
];

export const tags: tagsType[] = [
  {
    tag: "Getting Started",
    url: "getting-started",
    color: "#FF4C60",
  },
  {
    tag: "Health",
    url: "health",
    color: "#f5b061",
  },
  {
    tag: "Lifestyle",
    url: "lifestyle",
    color: "#83fbd7",
  },
  {
    tag: "Music",
    url: "music",
    color: "#fb0699",
  },
  {
    tag: "Technology",
    url: "technology",
    color: "#3f8cff",
  },
  {
    tag: "Travel",
    url: "travel",
    color: "#7171e2",
  },
];

const authors: Author[] = [
  {
    name: "Taiwo Adewale",
    image: images.author01,
  },
  {
    name: "Sophie Dee",
    image: images.author02,
  },
];

export const posts: postsType[] = [
  {
    id: 0,
    title: "5 Simple Ways to Improve Your Mental Health",
    url: "5-simple-ways-to-improve-your-mental-health",
    image: images.health,
    date: "February 01, 2023",
    minsToRead: 5,
    author: authors[0],
    tags: [tags[0], tags[1]],
    excerpt:
      "Mental health is an important part of our overall well-being, yet it's often overlooked or ignored. We're so busy with our daily lives that we forget to take care of ourselves. But just like we need to eat well and exercise to maintain our physical health, we also need to take care of our mental health. Here are five simple ways to improve your mental health",
    body: (
      <>
        <p>
          Mental health is an important part of our overall well-being, yet it's
          often overlooked or ignored. We're so busy with our daily lives that
          we forget to take care of ourselves. But just like we need to eat well
          and exercise to maintain our physical health, we also need to take
          care of our mental health. Here are five simple ways to improve your
          mental health:
        </p>

        <ul>
          <li>
            <strong>Establish a routine:</strong> Having a routine can help
            create a sense of structure and purpose in our lives. It can also
            help us feel more in control, which can be particularly helpful if
            we're experiencing anxiety or depression. Establishing a routine
            doesn't have to be complicated. Simply set a regular wake-up time,
            plan out your day in advance, and try to stick to a schedule as much
            as possible.
          </li>
          <li>
            <strong>Stay active:</strong> Exercise is one of the most effective
            ways to boost your mood and reduce stress. It doesn't have to be
            intense or time-consuming. Even a short walk or a few minutes of
            stretching can make a big difference. Regular exercise can also
            improve sleep, increase energy levels, and improve overall physical
            health.
          </li>
          <li>
            <strong>Practice mindfulness:</strong> Mindfulness is a type of
            meditation that involves focusing on the present moment and letting
            go of distracting thoughts. It's been shown to be effective in
            reducing stress, anxiety, and depression. Mindfulness can be
            practiced in many different ways, such as through meditation, yoga,
            or simply taking a few minutes to focus on your breath.
          </li>
          <li>
            <strong>Reach out for support:</strong> It's important to remember
            that you're not alone. If you're struggling with your mental health,
            don't be afraid to reach out for help. Talk to a trusted friend or
            family member, or seek out professional support from a therapist or
            counselor. There are also many online resources and support groups
            available.
          </li>
          <li>
            <strong>Take care of your physical health:</strong> Our physical and
            mental health are closely intertwined. Taking care of your physical
            health can also help improve your mental health. Make sure to eat a
            balanced diet, get enough sleep, and avoid drugs and alcohol. It's
            also important to schedule regular check-ups with your doctor to
            stay on top of any potential health issues.
          </li>
        </ul>

        <p>
          Incorporating these five habits into your daily life can have a
          positive impact on your mental health. But it's important to remember
          that there's no one-size-fits-all solution. What works for one person
          may not work for another. It's important to experiment and find what
          works best for you.
        </p>

        <p>
          Incorporating these five habits into your daily life can have a
          positive impact on your mental health. But it's important to remember
          that there's no one-size-fits-all solution. What works for one person
          may not work for another. It's important to experiment and find what
          works best for you.
        </p>
      </>
    ),
    comments: [
      {
        commenter: "T Blaze",
        image: images.comment05,
        timeSpent: 3,
        comment: "This is my test comment",
        likes: 17,
        comments: [
          {
            commenter: "Nick Cannon",
            image: images.comment02,
            timeSpent: 2,
            comment: "This is not the place to test comments",
            likes: 43,
          },
          {
            commenter: "Sophia Black",
            image: images.comment03,
            timeSpent: 2,
            comment: "I agree with Nick",
            likes: 8,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "10 Hacks for a More Productive Morning Routine",
    url: "10-hacks-for-a-more-productive-morning-routine",
    image: images.lifestyle,
    date: "January 26, 2023",
    minsToRead: 3,
    author: authors[0],
    tags: [tags[2]],
    excerpt:
      "The morning sets the tone for the rest of the day. If you start off feeling stressed or unproductive, it can be hard to turn things around. That's why having a productive morning routine is so important. Here are ten hacks to help you make the most of your mornings",
    body: (
      <>
        <p>
          The morning sets the tone for the rest of the day. If you start off
          feeling stressed or unproductive, it can be hard to turn things
          around. That's why having a productive morning routine is so
          important. Here are ten hacks to help you make the most of your
          mornings:
        </p>

        <ul>
          <li>
            <strong>Get enough sleep:</strong> It's hard to be productive when
            you're tired. Make sure to get enough sleep so you wake up feeling
            refreshed and ready to tackle the day. Aim for at least 7-8 hours of
            sleep per night.
          </li>
          <li>
            <strong>Wake up at the same time every day:</strong> Consistency is
            key when it comes to establishing a productive morning routine. Try
            to wake up at the same time every day, even on weekends.
          </li>
          <li>
            <strong>Drink water:</strong> Drinking water first thing in the
            morning can help hydrate your body and kickstart your metabolism.
            Keep a glass of water by your bed to drink as soon as you wake up.
          </li>
          <li>
            <strong>Avoid your phone:</strong> It's easy to get sucked into your
            phone first thing in the morning, but this can be a major
            productivity killer. Try to avoid checking your phone for at least
            the first 30 minutes of the day.
          </li>
          <li>
            <strong>Plan out your day:</strong> Spend a few minutes each morning
            planning out your day. Write down your goals and to-do list for the
            day so you have a clear plan of action.
          </li>
          <li>
            <strong>Eat a healthy breakfast:</strong> Breakfast is the most
            important meal of the day. Make sure to eat a balanced breakfast
            that includes protein, healthy fats, and complex carbohydrates.
          </li>
          <li>
            <strong>Exercise:</strong> Exercise is a great way to boost your
            energy and mood. Even a quick 10-minute workout can make a big
            difference.
          </li>
          <li>
            <strong>Meditate:</strong> Taking a few minutes to meditate in the
            morning can help reduce stress and anxiety. Sit quietly and focus on
            your breath for a few minutes each morning.
          </li>
          <li>
            <strong>Practice gratitude:</strong> Take a few minutes each morning
            to think about what you're grateful for. This can help you start the
            day on a positive note.
          </li>
          <li>
            <strong>Get dressed:</strong> Even if you're working from home, it's
            important to get dressed in the morning. This can help you feel more
            motivated and productive.
          </li>
          <p>
            Incorporating these ten habits into your morning routine can help
            you start your day off on the right foot. But remember, everyone's
            morning routine is different. Experiment with different habits and
            find what works best for you. With the right routine, you can set
            yourself up for a productive and successful day.
          </p>
        </ul>
      </>
    ),
    comments: [
      {
        commenter: "Belle Nami",
        image: images.comment04,
        timeSpent: 27,
        comment: "Honestly since I started this, my life has changed a lot",
        likes: 56,
      },
    ],
  },
  {
    id: 2,
    title: "The Evolution of Pop Music: A Brief History",
    url: "the-evolution-of-pop-music-a-brief-history",
    image: images.music,
    date: "January 19, 2023",
    minsToRead: 7,
    author: authors[1],
    tags: [tags[3], tags[2]],
    excerpt:
      "Pop music has been a staple of popular culture for decades, with its catchy tunes and danceable beats appealing to audiences of all ages. But how did pop music come to be the force it is today? Let's take a brief look at the evolution of pop music over the years. The origins of pop music can be traced back to the 1950s, when rock and roll began to emerge as a new genre of music. Artists such as Elvis Presley and Chuck Berry became household names, and their energetic, upbeat music captured the hearts of young people around the world.",
    body: (
      <>
        <p>
          Pop music has been a staple of popular culture for decades, with its
          catchy tunes and danceable beats appealing to audiences of all ages.
          But how did pop music come to be the force it is today? Let's take a
          brief look at the evolution of pop music over the years.
        </p>

        <p>
          The origins of pop music can be traced back to the 1950s, when rock
          and roll began to emerge as a new genre of music. Artists such as
          Elvis Presley and Chuck Berry became household names, and their
          energetic, upbeat music captured the hearts of young people around the
          world.
        </p>

        <p>
          In the 1960s, pop music continued to evolve, with the advent of the
          "British Invasion" led by bands such as The Beatles, The Rolling
          Stones, and The Who. These bands brought a fresh, new sound to the pop
          music scene, blending rock and roll with folk and blues influences.
        </p>

        <p>
          The 1970s saw the rise of disco, with artists such as Bee Gees and
          Donna Summer dominating the charts with their infectious dance hits.
          Pop music also began to incorporate elements of funk and soul, with
          artists like Michael Jackson and Stevie Wonder paving the way for
          future generations of pop stars.
        </p>

        <p>
          The 1980s brought a new wave of pop music, with the rise of MTV and
          the introduction of music videos. This decade saw the emergence of
          iconic pop stars such as Madonna, Whitney Houston, and Prince, who
          pushed the boundaries of what was considered "mainstream" music.
        </p>

        <p>
          In the 1990s, pop music continued to evolve, with the rise of boy
          bands like Backstreet Boys and *NSYNC, as well as female pop icons
          like Britney Spears and Christina Aguilera. The popularity of hip hop
          and R&B also had a significant impact on pop music during this time.
        </p>

        <p>
          In the 2000s, pop music became even more globalized, with artists from
          all over the world finding success in the mainstream. The rise of
          social media and streaming services also had a significant impact on
          the music industry, allowing for greater exposure and accessibility
          for new and emerging artists.
        </p>

        <p>
          Today, pop music continues to evolve and adapt to changing trends and
          technologies. From the infectious beats of K-pop to the introspective
          lyrics of indie pop, there is a vast array of pop music to suit every
          taste and mood.
        </p>

        <p>
          In conclusion, the evolution of pop music is a fascinating journey
          that reflects the changing cultural and social landscapes of our time.
          While the genre has certainly undergone many changes over the years,
          its universal appeal and ability to bring people together through
          music remains as strong as ever.
        </p>
      </>
    ),
    comments: [
      {
        commenter: "Ola Michael",
        image: images.comment01,
        timeSpent: 7,
        comment: "Now I love pop music more",
        likes: 8,
      },
      {
        commenter: "Belle Nami",
        image: images.comment04,
        timeSpent: 9,
        comment: "Please can you do one for rock music",
        likes: 12,
      },
    ],
  },
  {
    id: 3,
    title: "5 Ways Technology is Revolutionizing the Way We Work",
    url: "5-ways-technology-is-revolutionizing-the-way-we-work",
    image: images.tech,
    date: "January 7, 2023",
    minsToRead: 4,
    author: authors[0],
    tags: [tags[4], tags[2]],
    excerpt:
      "Technology has revolutionized the way we live our lives, and it has also transformed the way we work. From communication to productivity, here are five ways that technology is changing the workplace as we know it",

    body: (
      <>
        <p>
          Technology has revolutionized the way we live our lives, and it has
          also transformed the way we work. From communication to productivity,
          here are five ways that technology is changing the workplace as we
          know it:
        </p>

        <ul>
          <li>
            Remote Work: Technology has made it possible for people to work from
            anywhere in the world. With tools like video conferencing, cloud
            computing, and project management software, employees can
            collaborate with their team members and access important documents
            and information from anywhere.
          </li>
          <li>
            Increased Productivity: Technology has made it easier for employees
            to be more productive than ever before. With tools like automation,
            artificial intelligence, and machine learning, tasks that used to
            take hours can now be completed in just a few minutes.
          </li>
          <li>
            Improved Communication: Technology has also improved communication
            in the workplace. With instant messaging and email, employees can
            quickly and easily share information and ideas with their
            colleagues. Video conferencing has also made it possible for teams
            to hold virtual meetings, reducing the need for travel and saving
            time and money.
          </li>
          <li>
            Enhanced Efficiency: Technology has also made it possible to
            automate repetitive tasks, reducing the risk of human error and
            freeing up employees to focus on more important tasks. Tools like
            chatbots and customer relationship management (CRM) software can
            also help companies to provide faster and more efficient customer
            service.
          </li>
          <li>
            Flexibility: Technology has made it possible for companies to offer
            more flexible working arrangements, such as part-time work, job
            sharing, and flexible schedules. This can help companies to attract
            and retain top talent, as well as improve work-life balance for
            employees.
          </li>

          <p>
            Overall, technology has had a significant impact on the way we work,
            and it will continue to do so in the years to come. While there are
            certainly challenges associated with new technologies, such as the
            need for ongoing training and the risk of job displacement, there
            are also many benefits that can help to improve productivity,
            efficiency, and job satisfaction. As we continue to embrace new
            technologies and find ways to integrate them into our workplaces, we
            can look forward to a more connected, efficient, and flexible future
            of work.
          </p>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "10 Must See Destinations for Nature Lovers",
    url: "10-must-see-destinations-for-nature-lovers",
    image: images.travel,
    date: "December 29, 2022",
    minsToRead: 4,
    author: authors[1],
    tags: [tags[4], tags[2]],
    excerpt:
      "Nature is full of wonders, from pristine beaches and towering mountains to lush forests and stunning waterfalls. For nature lovers, there's nothing quite like experiencing the beauty of the natural world up close and personal. Here are ten must-see destinations for nature lovers",
    body: (
      <>
        <p>
          Nature is full of wonders, from pristine beaches and towering
          mountains to lush forests and stunning waterfalls. For nature lovers,
          there's nothing quite like experiencing the beauty of the natural
          world up close and personal. Here are ten must-see destinations for
          nature lovers:
        </p>

        <ul>
          <li>
            <strong>Banff National Park, Canada:</strong> Located in the
            Canadian Rockies, Banff National Park is home to some of the most
            breathtaking scenery in the world. With its crystal clear lakes,
            towering mountains, and abundant wildlife, it's a nature lover's
            paradise.
          </li>

          <li>
            <strong>Serengeti National Park, Tanzania:</strong> Known for its
            incredible wildlife and stunning landscapes, the Serengeti National
            Park is a must-visit destination for anyone interested in nature.
            From the Great Migration of wildebeest and zebra to the majestic
            lions and leopards that roam the savannah, there's always something
            to see in the Serengeti.
          </li>

          <li>
            <strong>The Galapagos Islands, Ecuador:</strong> Made famous by
            Charles Darwin, the Galapagos Islands are a nature lover's dream
            come true. With their unique wildlife, including giant tortoises and
            marine iguanas, and stunning landscapes, the Galapagos are a
            must-see destination for anyone interested in nature and science.
          </li>

          <li>
            <strong> The Grand Canyon, USA:</strong> One of the most iconic
            natural landmarks in the world, the Grand Canyon is a testament to
            the power of nature. With its towering cliffs and stunning vistas,
            it's a must-visit destination for anyone interested in geology and
            natural history.
          </li>

          <li>
            <strong>The Amazon Rainforest, Brazil:</strong> The Amazon
            Rainforest is home to the most diverse ecosystem on the planet, with
            millions of species of plants and animals living within its borders.
            From colorful birds and monkeys to exotic insects and reptiles,
            there's no shortage of wildlife to see in the Amazon.
          </li>

          <li>
            <strong>The Great Barrier Reef, Australia:</strong> The Great
            Barrier Reef is the largest coral reef system in the world, and it's
            home to an incredible array of marine life. With its clear waters
            and vibrant coral, it's a must-visit destination for anyone
            interested in marine biology and conservation.
          </li>

          <li>
            <strong>Yosemite National Park, USA:</strong> Located in
            California's Sierra Nevada Mountains, Yosemite National Park is home
            to some of the most stunning natural landscapes in the world. From
            its towering waterfalls to its towering granite cliffs, Yosemite is
            a nature lover's dream come true.
          </li>

          <li>
            <strong>The Scottish Highlands, Scotland:</strong> With its rugged
            landscapes and stunning natural beauty, the Scottish Highlands are a
            must-visit destination for anyone interested in nature and outdoor
            activities. From hiking and climbing to fishing and wildlife
            watching, there's no shortage of things to do in the Highlands.
          </li>

          <li>
            <strong>The Great Ocean Road, Australia:</strong> This scenic drive
            along Australia's southern coast is a must-visit destination for
            anyone interested in natural beauty. With its stunning ocean views
            and towering cliffs, it's a great place to take a road trip and soak
            up the beauty of the natural world.
          </li>

          <li>
            <strong>Yellowstone National Park, USA:</strong> Located in Wyoming,
            Yellowstone National Park is home to some of the most iconic natural
            landmarks in the United States. From Old Faithful and the Grand
            Prismatic Spring to the park's abundant wildlife, Yellowstone is a
            must-see destination for anyone interested in nature and the great
            outdoors.
          </li>
        </ul>
      </>
    ),
    comments: [
      {
        commenter: "Belle Nami",
        image: images.comment04,
        timeSpent: 3,
        comment: "Who will carry me to Australia?",
        likes: 15,
        comments: [
          {
            commenter: "Ola Michael",
            image: images.comment01,
            timeSpent: 1,
            comment: "Na wa o. Nami you still come blueway dey beg",
            likes: 28,
          },
        ],
      },
    ],
  },
];
