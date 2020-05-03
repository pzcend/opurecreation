import React from 'react';
import {Link} from 'gatsby'
import Image from '../../image';
import {
    BlogWrapper, 
    Thumb, 
    Category, 
    Content, 
    ContentTop, 
    ContentBottom, 
    PostDate, 
    PostTitle,
    Excerpt,
    PostMeta
} from './blog.stc'
 
const Blog = ({title, date, sector, year, id, author, path, image, excerpt}) => {
   
    return (
        <BlogWrapper>
            {image && (
                <Thumb>
                    <Link to={path}>
                        <Image fluid={image} alt={title}/>
                    </Link>
                    <Category>
                        <Link to={path}>{author}</Link>
                    </Category>
                </Thumb>
            )}
            <Content>
                <ContentTop>
                    <PostDate>{date}</PostDate>
                    <PostTitle><Link to={path}>{title}</Link></PostTitle>
                    <Excerpt>{sector}</Excerpt>
                </ContentTop>
                <ContentBottom>
                    <PostMeta>
                        <li><i className="ti-desktop"></i> <Link to={path}>{author}</Link></li>
                        <li><i className="ti-arrow-circle-down"></i> <Link to={path}>{year}</Link></li>
                    </PostMeta>
                </ContentBottom>
            </Content>
        </BlogWrapper>
    )
} 

export default Blog;