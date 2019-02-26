cors_headers = {
  'Access-Control-Allow-Origin' => 'http://178.128.146.248:4000',
}

run Proc.new { |env|
  # path = File.join('content', env['PATH_INFO'][1..-1])
  path = env['PATH_INFO'][1..-1]
  if File.exists?(path)
    content = File.read(path)
    [200, {'Content-Length' => content.bytesize.to_s}.merge(cors_headers), [content]]
  else
    [404, Hash.new, ['not found']]
  end
}
