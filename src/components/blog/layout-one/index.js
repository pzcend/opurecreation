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

const Blog = ({title, date, categorie, id, author, path, image, excerpt}) => {
    
    return (
        <BlogWrapper>
            {image && (
                <Thumb>
                    <Link to={path}>
                        <Image fluid={image} alt={title}/>
                    </Link>
                    <Category>
                        <Link to={path}>{categorie}</Link>
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
                        <li><i className="ti-comment"></i> <Link to={path}>{categorie}</Link></li>
                        <li><i className="ti-desktop"></i> <i className="ti-tablet"></i> <i className="ti-mobile"></i></li>
                    </PostMeta>
                </ContentBottom>
            </Content>
        </BlogWrapper>
    )
} 

export default Blog;