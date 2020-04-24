import React from 'react';
import {Link} from 'gatsby'
import Image from '../../image';
import {truncateString} from '../../../utils/utilFunctions'
import {
    BlogWrapper, 
    Thumb, 
    Category, 
    Content, 
    ContentTop, 
    ContentBottom, 
    PostTitle,
    Excerpt,
    PostMeta
} from './blog.stc'

const Blog = ({title, date, id, author, path, image, excerpt}) => {
    
    return (
        <BlogWrapper>
            {image && (
                <Thumb>
                    <Link to={path}>
                        <Image fluid={image} alt={title}/>
                    </Link>
                    <Category>
                        <Link to={path}>Développement</Link>
                    </Category>
                </Thumb>
            )}
            <Content>
                <ContentTop>
                    <PostTitle><Link to={path}>{truncateString(title, 30)}</Link></PostTitle>
                    <Excerpt>{excerpt}</Excerpt>
                </ContentTop>
                <ContentBottom>
                    <PostMeta>
                        <li><i className="ti-user"></i> <Link to={path}>{author}</Link></li>
                       
                    </PostMeta>
                </ContentBottom>
            </Content>
        </BlogWrapper>
    )
} 

export default Blog;