export interface Project {
  title: string
  description: string
  image: string
  features: string[]
  tags: string[]
  github?: string
  live?: string
}

export const PROJECTS_DATA: Project[] = [
  {
    title: "WordQuest",
    description: "A polished React Native and TypeScript mobile word puzzle game. Features dynamic AI-generated puzzles powered by the Gemini API, built on an offline-first architecture with local caching.",
    image: "/assets/projects/wordquest.jpg",
    github: "https://github.com/RekhaKorepu/word-quest",
    features: [
      "Generates unique word puzzles dynamically using the Gemini API.",
      "Caches AI puzzles locally so players can continue playing without internet.",
      "Automatically scales puzzle difficulty to match the player's progression.",
      "Tracks player stats, levels, and unlocks unique milestone badges.",
      "Boosts user retention with unique daily puzzles and streak tracking.",
    ],
    tags: ["React Native", "TypeScript", "Expo", "Gemini AI API", "Offline-First", "Local Caching"]
  },
  {
    title: "Bureaucracy System",
    description: "A responsive FastAPI and React-based web RAG assistant. Features semantic search and local inference powered by Ollama (Llama 3.2), ChromaDB, and community-driven insights.",
    image: "/assets/projects/bureaucracy.jpg",
    github: "https://github.com/RekhaKorepu/Bureaucracy-System",
    features: [
      "Provides private, high-speed query response using Ollama and local Llama 3.2.",
      "Combines official government documentation with Reddit user experience data.",
      "Performs efficient semantic retrieval using ChromaDB and SentenceTransformers.",
      "Automates data ingestion from portals and forums using custom BeautifulSoup scrapers.",
      "Delivers a seamless user experience through a responsive React chatroom interface.",
    ],
    tags: ["FastAPI", "React", "ChromaDB", "Ollama", "Llama 3.2", "LangChain", "RAG"]
  }
]
