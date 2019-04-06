NAME = 'botanicus/blog'

task :deploy do
  sh "heroku container:push web -a botanicus-me"
  sh "heroku container:release web -a botanicus-me"
end

desc "Build a docker image"
task 'docker:build' do
  sh "docker build . -t #{NAME}"
end

desc "Run the Docker image"
task 'docker:run' do
  sh "docker run -it --rm --name #{NAME} -v $PWD/nginx.conf:/etc/nginx/nginx.conf -v $PWD/build:/usr/share/nginx/html/build -v $PWD/posts/content:/usr/share/nginx/html/content --publish 8080:8080 #{NAME}"
end

desc "Run shell in the Docker image (no volumes)"
task 'docker:ssh' do
  sh "docker run -it --rm --name #{NAME}-sh #{NAME} /bin/sh"
end

desc "Run shell in the Docker image (with volumes)"
task 'docker:ssh:volumes' do
  sh "docker run -it --rm --name #{NAME}-sh-vol -v $PWD/nginx.conf:/etc/nginx/nginx.conf -v $PWD/build:/usr/share/nginx/html/build -v $PWD/posts/content:/usr/share/nginx/html/content #{NAME} /bin/sh"
end

desc "Build the React app bundle"
task 'npm:build' do
  sh "npm run build"
end

desc "Build the JSON content"
task 'content:build' do
  sh "(cd posts && rake)"
end

task build: ['npm:build', 'content:build', 'docker:build']
task default: :build
