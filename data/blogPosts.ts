export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Move Semantics in Modern C++',
    excerpt: 'A deep dive into move semantics, rvalue references, and how they improve performance in C++ applications.',
    content: `
# Understanding Move Semantics in Modern C++

Move semantics is one of the most important features introduced in C++11, and it's essential for writing efficient modern C++ code.

## What are Move Semantics?

Move semantics allow us to transfer ownership of resources from one object to another without copying. This is particularly useful for expensive-to-copy objects like large containers or file handles.

## Rvalue References

The foundation of move semantics is rvalue references, denoted by `&&`. An rvalue reference binds to temporary objects that are about to be destroyed.

\`\`\`cpp
std::string createString() {
    return std::string("Hello, World!");
}

std::string str = createString(); // Move constructor called, not copy
\`\`\`

## Move Constructor and Move Assignment

Classes should define move constructor and move assignment operator to take advantage of move semantics:

\`\`\`cpp
class MyClass {
public:
    // Move constructor
    MyClass(MyClass&& other) noexcept
        : data_(std::move(other.data_)) {
        other.data_ = nullptr;
    }
    
    // Move assignment
    MyClass& operator=(MyClass&& other) noexcept {
        if (this != &other) {
            delete data_;
            data_ = std::move(other.data_);
            other.data_ = nullptr;
        }
        return *this;
    }
    
private:
    int* data_;
};
\`\`\`

## When to Use std::move

Use \`std::move\` when you want to explicitly indicate that an object can be moved from. This is useful in function returns and when passing objects to move constructors.

## Benefits

- Eliminates unnecessary copies
- Improves performance, especially with large objects
- Enables efficient resource management
- Works seamlessly with STL containers

Understanding move semantics is crucial for writing efficient C++ code in the modern era.
    `.trim(),
    date: '2024-01-15',
    tags: ['C++', 'Move Semantics', 'C++11', 'Performance'],
    readTime: 8,
  },
  {
    id: '2',
    title: 'RAII: Resource Management in C++',
    excerpt: 'Learn about RAII (Resource Acquisition Is Initialization), a fundamental C++ idiom that ensures proper resource management.',
    content: `
# RAII: Resource Management in C++

RAII (Resource Acquisition Is Initialization) is a fundamental C++ programming idiom that ensures resources are properly managed.

## The Principle

The basic idea is that resources should be acquired in a constructor and released in a destructor. This guarantees that resources are always properly cleaned up, even if an exception is thrown.

## Why RAII Matters

Without RAII, you need to manually manage resources:

\`\`\`cpp
void badFunction() {
    int* ptr = new int(42);
    // ... code that might throw ...
    delete ptr; // Might never execute!
}
\`\`\`

With RAII, cleanup is automatic:

\`\`\`cpp
void goodFunction() {
    std::unique_ptr<int> ptr = std::make_unique<int>(42);
    // ... code that might throw ...
    // ptr automatically cleaned up, even if exception thrown
}
\`\`\`

## Standard Library Examples

The C++ standard library provides many RAII wrappers:

- \`std::unique_ptr\` - Manages unique ownership of dynamically allocated objects
- \`std::shared_ptr\` - Manages shared ownership
- \`std::lock_guard\` - Automatically releases mutex locks
- \`std::fstream\` - Automatically closes files
- \`std::vector\` - Automatically manages dynamic arrays

## Implementing Your Own RAII Class

\`\`\`cpp
class FileHandle {
public:
    FileHandle(const std::string& filename) {
        file_ = fopen(filename.c_str(), "r");
        if (!file_) {
            throw std::runtime_error("Could not open file");
        }
    }
    
    ~FileHandle() {
        if (file_) {
            fclose(file_);
        }
    }
    
    // Delete copy constructor and assignment
    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;
    
private:
    FILE* file_;
};
\`\`\`

RAII is one of the most important concepts in C++ and makes code safer and more maintainable.
    `.trim(),
    date: '2024-01-10',
    tags: ['C++', 'RAII', 'Resource Management', 'Best Practices'],
    readTime: 6,
  },
  {
    id: '3',
    title: 'Exploring C++20 Concepts and Constraints',
    excerpt: 'An introduction to C++20 concepts, which bring more powerful generic programming capabilities to the language.',
    content: `
# Exploring C++20 Concepts and Constraints

C++20 introduced concepts, a powerful feature that allows us to specify requirements on template parameters. This makes templates more readable, provides better error messages, and enables more expressive generic code.

## What are Concepts?

Concepts are named predicates that constrain template parameters. They specify what operations a type must support.

## Defining Concepts

\`\`\`cpp
#include <concepts>

template<typename T>
concept Addable = requires(T a, T b) {
    { a + b } -> std::convertible_to<T>;
};

template<typename T>
concept Printable = requires(T t) {
    std::cout << t;
};
\`\`\`

## Using Concepts

You can use concepts to constrain template parameters:

\`\`\`cpp
template<Addable T>
T add(T a, T b) {
    return a + b;
}

// Or with requires clause
template<typename T>
requires Addable<T>
T subtract(T a, T b) {
    return a - b;
}
\`\`\`

## Standard Library Concepts

C++20 provides many standard concepts in \`<concepts>\`:

- \`std::integral\` - Integer types
- \`std::floating_point\` - Floating-point types
- \`std::copyable\` - Copy-constructible and copy-assignable
- \`std::movable\` - Move-constructible and move-assignable
- \`std::same_as\` - Types are the same

## Benefits

1. **Better Error Messages**: Compiler errors are clearer when concepts are violated
2. **Documentation**: Concepts serve as self-documenting code
3. **Overloading**: Functions can be overloaded based on concept satisfaction
4. **Type Safety**: Catch errors at compile-time rather than runtime

Concepts are a game-changer for generic programming in C++!
    `.trim(),
    date: '2024-01-05',
    tags: ['C++', 'C++20', 'Concepts', 'Templates'],
    readTime: 10,
  },
]

