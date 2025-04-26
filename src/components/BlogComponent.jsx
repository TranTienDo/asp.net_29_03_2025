import React, { useState, useEffect } from 'react';

const BlogComponent = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Lấy dữ liệu từ API bên ngoài
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error("Error fetching posts:", error));
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {posts.map(post => (
                  <article className="blog_item" key={post.id}>
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src="https://via.placeholder.com/150" alt={`Blog ${post.id}`} />
                      <a href="#" className="blog_item_date">
                        <h3>{new Date().getDate()}</h3>
                        <p>{new Date().toLocaleString('default', { month: 'long' })}</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <a className="d-inline-block" href={`/single-blog/${post.id}`}>
                        <h2>{post.title}</h2>
                      </a>
                      <p>{post.body}</p>
                    </div>
                  </article>
                ))}

                {/* Pagination */}
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)}>
                        <i className="ti-angle-left" />
                      </a>
                    </li>
                    {[1, 2, 3, 4, 5].map(page => (
                      <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                        <a href="#" className="page-link" onClick={() => handlePageChange(page)}>{page}</a>
                      </li>
                    ))}
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)}>
                        <i className="ti-angle-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogComponent;
