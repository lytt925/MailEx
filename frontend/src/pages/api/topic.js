import topics from '@/api/topics.json';


export default function handler(req, res) {
  const randomTopics = topics.sort(() => Math.random() - Math.random()).slice(0, 1);
  res.status(200).json(randomTopics)
}