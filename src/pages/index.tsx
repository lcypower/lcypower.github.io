import { graphql, HeadFC, PageProps } from 'gatsby'
import Category from '../components/main/Category'
import { useState } from 'react'
import PostList from '../components/main/PostList'
import Introduction from '../components/main/Introduction'
import SEO from '../components/common/Seo'

export const Head: HeadFC = () => <SEO />

export default function Index({
  data: {
    allContentfulPost: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = nodes.reduce<Record<string, number>>(
    (categories, post) => {
      post.category
        ?.filter((category): category is string => !!category)
        .forEach(
          category => (categories[category] = (categories[category] ?? 0) + 1),
        )

      return categories
    },
    { All: nodes.length },
  )

  const posts = nodes.filter(
    ({ category }) =>
      selectedCategory === 'All' || category?.includes(selectedCategory),
  )

  const handleSelect = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <Introduction />
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        handleSelect={handleSelect}
      />
      <PostList posts={posts} />
    </>
  )
}


export const query = graphql`
  query IndexPage {
    allContentfulPost(sort: { date: DESC }) {
      nodes {
        title
        category
        slug
        date
        thumbnail {
          gatsbyImageData(width: 500)
        }
        description {
          description
        }
      }
    }
  }
`
