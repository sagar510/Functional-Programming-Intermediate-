ispartof.[].[]=True
ispartof.ws.[]=False
ispartof.[].ys=True
ispartof.(w::ws).(y::ys)=if (w==y) then ispartof.ws.ys else ispartof.(w::ws).ys

rmt.xs.[]=xs
rmt.xs.(y::ys)=rmt.(eachrem.xs.y).ys
eachrem.[].n=[]
eachrem.(x::xs).n=if (x==n) then eachrem.xs.n else x::eachrem.xs.n

grouping.xs=(map.(\(k::ks)->k).xs)::grouping.(remfirst.xs)
remfirst.xs=map.(\(k::ks)->ks).xs

--gr1line.xs=(map.(\(k::ks)->k).xs)::(grouping.(map.(\y::ys)->ys))




-- At Home

--Q3
myreverse.xs.n.m= break1.xs.n  ++  rev.(break2.xs.n.(m+1))  ++  break3.xs.m
break1.xs.1=[]
break1.(x::xs).n=x::break1.xs.(n-1)
break3.xs.0=xs
break3.(x::xs).m=break3.xs.(m-1)
break2.xs.1.m=break1.xs.m
break2.(x::xs).n.m=break2.xs.(n-1).(m-1)
rev.[]=[]
rev.(x::xs)=rev.xs++[x]