export type ProjectCategory = 'passion-projects' | 'distributed-systems' | 'operating-systems'

export interface Project {
  id: string
  title: string
  description: string
  detailedDescription?: string
  category: ProjectCategory
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Distributed Consensus Protocol',
    description: 'Implementation of a Raft consensus algorithm for distributed systems, ensuring consistency across multiple nodes.',
    detailedDescription: `
This project implements the Raft consensus algorithm, a critical component for building reliable distributed systems. The implementation includes:

## Key Features
- Leader election mechanism to handle node failures
- Log replication across cluster nodes
- Safety guarantees through consensus protocol
- Network partition handling
- Persistent state management

## Technical Details
The system uses TCP/IP for node communication and implements state machines for managing cluster state. The protocol ensures that all nodes agree on the same sequence of commands, making it suitable for building distributed databases, configuration services, and other critical infrastructure components.

## Challenges Overcome
- Handling split-brain scenarios
- Efficient log compaction
- Optimizing network message throughput
- Testing under various failure conditions
    `.trim(),
    category: 'distributed-systems',
    technologies: ['C++', 'Raft Protocol', 'Distributed Systems', 'Networking'],
    githubUrl: 'https://github.com/yourusername/distributed-consensus',
  },
  {
    id: '2',
    title: 'Microkernel Operating System',
    description: 'A lightweight microkernel OS implementation with process management, memory protection, and inter-process communication.',
    detailedDescription: `
A from-scratch operating system implementation following microkernel architecture principles. This project demonstrates deep understanding of system-level programming.

## Architecture
The kernel provides minimal abstractions:
- Process scheduling and management
- Virtual memory management
- Inter-process communication (IPC)
- Device driver framework
- System call interface

## Core Components
- **Scheduler**: Multi-level priority queue scheduler with round-robin time slicing
- **Memory Manager**: Virtual memory system with page tables, memory mapping, and protection
- **IPC System**: Message-passing mechanism for process communication
- **Device Drivers**: Modular driver architecture for hardware abstraction

## Implementation Highlights
- Bootloader integration
- Hardware interrupt handling
- Context switching and process isolation
- File system interface design
    `.trim(),
    category: 'operating-systems',
    technologies: ['C', 'Assembly', 'Operating Systems', 'x86 Architecture'],
    githubUrl: 'https://github.com/yourusername/microkernel-os',
  },
  {
    id: '3',
    title: 'Distributed Key-Value Store',
    description: 'A fault-tolerant distributed key-value store with replication and consistency guarantees.',
    detailedDescription: `
A scalable distributed database system that stores key-value pairs across multiple nodes with automatic replication and failure recovery.

## Features
- Consistent hashing for data distribution
- Multi-master replication
- Conflict resolution strategies
- Gossip protocol for cluster membership
- Tunable consistency levels (eventual, strong)

## Design Decisions
The system uses a ring topology for data distribution and implements vector clocks for tracking causality. Replication is performed asynchronously to maintain high availability while providing configurable consistency guarantees.

## Performance
- Sub-millisecond read latency
- Horizontal scalability to hundreds of nodes
- Automatic rebalancing on node additions/removals
- Efficient compression and serialization
    `.trim(),
    category: 'distributed-systems',
    technologies: ['C++', 'Distributed Systems', 'Consistent Hashing', 'Replication'],
    githubUrl: 'https://github.com/yourusername/distributed-kv-store',
  },
  {
    id: '4',
    title: 'File System Implementation',
    description: 'A custom file system with journaling, extents-based allocation, and metadata management.',
    detailedDescription: `
A complete file system implementation with modern features like journaling for crash recovery and extents for efficient large file handling.

## File System Features
- **Journaling**: Write-ahead logging for metadata consistency
- **Extents**: Efficient allocation for large files
- **Inode-based**: Traditional Unix-style inode structure
- **Directory indexing**: B-tree for fast directory lookups
- **Hard links and symbolic links**: Full POSIX support

## Implementation Details
The file system supports:
- Block size: 4KB (configurable)
- Maximum file size: 4TB
- Maximum path length: 4096 characters
- POSIX-compliant file operations
- Efficient caching and buffering

## Tools Built
- \`mkfs\` utility for formatting
- \`fsck\` for filesystem checking and repair
- Mount/unmount support
- Debugging and inspection tools
    `.trim(),
    category: 'operating-systems',
    technologies: ['C', 'Operating Systems', 'File Systems', 'Kernel Development'],
    githubUrl: 'https://github.com/yourusername/custom-filesystem',
  },
  {
    id: '5',
    title: 'Distributed Search Engine',
    description: 'A distributed search engine built to handle large-scale web crawling and indexing with horizontal scalability.',
    detailedDescription: `
A fully functional distributed search engine that can crawl, index, and serve search results across multiple nodes.

## Features
- **Distributed Crawling**: Multi-node web crawler with duplicate detection
- **Inverted Index**: Efficient indexing using distributed inverted index structure
- **Ranking Algorithm**: TF-IDF and PageRank-based ranking for relevant results
- **Fault Tolerance**: Automatic failover and data replication
- **Horizontal Scaling**: Add nodes dynamically to increase capacity

## Architecture
The system consists of:
- **Crawler Nodes**: Responsible for fetching and parsing web pages
- **Indexer Nodes**: Build and maintain distributed inverted indexes
- **Query Servers**: Handle search queries and rank results
- **Coordinator**: Manages cluster state and load balancing

## Technical Highlights
- Custom URL frontier and politeness policies
- Distributed hash table for index sharding
- Real-time indexing pipeline
- RESTful API for search queries
- Web interface for search results
    `.trim(),
    category: 'passion-projects',
    technologies: ['Python', 'Distributed Systems', 'Web Crawling', 'Information Retrieval', 'Elasticsearch'],
    githubUrl: 'https://github.com/yourusername/distributed-search-engine',
  },
  {
    id: '6',
    title: 'GeonTime',
    description: 'A full-stack time tracking and productivity application with real-time collaboration features.',
    detailedDescription: `
GeonTime is a comprehensive time tracking application that helps individuals and teams manage their time efficiently and gain insights into productivity patterns.

## Key Features
- **Time Tracking**: Start/stop timers with project and task categorization
- **Project Management**: Organize work into projects with custom tags and categories
- **Analytics Dashboard**: Visualize time spent across projects with charts and reports
- **Team Collaboration**: Share projects with team members and track team productivity
- **Export & Reports**: Generate detailed reports in multiple formats (PDF, CSV, JSON)

## Tech Stack
- **Frontend**: React with TypeScript for type safety and modern UI components
- **Backend**: Node.js with Express for RESTful API
- **Database**: PostgreSQL for reliable data persistence
- **Authentication**: JWT-based authentication with secure password hashing
- **Real-time**: WebSocket integration for live updates
- **Deployment**: Docker containerization for easy deployment

## Highlights
- Responsive design that works on desktop, tablet, and mobile
- Dark mode support
- Keyboard shortcuts for power users
- Data export and backup functionality
- Integration with popular productivity tools
    `.trim(),
    category: 'passion-projects',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'WebSocket'],
    githubUrl: 'https://github.com/yourusername/geontime',
    liveUrl: 'https://geontime.example.com',
  },
]

