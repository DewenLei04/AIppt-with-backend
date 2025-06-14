# 自定义后端接口 (Custom Backend API)
原项目5000端口的后端被此OPENAI compatible 的接口接管，只影响aippt部分
## usage
推荐使用uv管理依赖 
进入aippt_backend 目录 
```
uv venv
uv pip install .
# 设置LLM模型环境变量
cp .env_example .env
# 编辑.env 文件
# 启动后端
uv run main.py
```

### 不使用uv方式 (Without using uv)
如果不想使用uv，可以手动设置虚拟环境并安装依赖 :  
```
# 创建虚拟环境
python3 -m venv venv
# 激活虚拟环境
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
# 安装依赖
pip install .
# 设置LLM模型环境变量
cp .env_example .env
# 编辑.env 文件
# 启动后端
python main.py
```