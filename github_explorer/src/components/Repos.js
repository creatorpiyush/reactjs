import React from "react";
import { Card } from "react-bootstrap";

export default function Repos({ repo }) {
  return (
    <div>
      <Card>
        <Card.Body>
          <a rel="noreferrer" target="_blank" href={repo.html_url}>
            <Card.Title>
              <h3>{repo.full_name}</h3>
            </Card.Title>
            <Card.Text>{repo.language}</Card.Text>
            <p>
              <strong>Stars:</strong>
              {repo.stargazers_count}
            </p>
            <p>
              <strong>Watchers:</strong>
              {repo.watchers_count}
            </p>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
