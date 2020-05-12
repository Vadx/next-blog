
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from 'next/link'
import fs from 'fs'

export default function Index ({ slugs }) {
  return (
    <>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Slugs:
        </Typography>
        {slugs.map(slug => {
          return (
            <div key={slug}>
              <Link href='/blog/[slug]' as={`/blog/${slug}`}>
                {/* <a>{`/blog/${slug}`}</a> */}
                <Typography>{slug}</Typography>
              </Link>
            </div>
          )
        })}
      </Box>
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts')
  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', ''))
    }
  }
}
